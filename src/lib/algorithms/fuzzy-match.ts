/**
 * Dynamic Programming Fuzzy Matching & Edit Distance Algorithms
 * 
 * 1. Levenshtein Edit Distance:
 *    - Computes the minimum number of single-character edits (insertions, deletions, substitutions)
 *      required to transform string A into string B.
 *    - Uses a 2D Dynamic Programming table of size (M+1) x (N+1).
 *    - Time Complexity: O(M * N)
 *    - Space Complexity: O(M * N)
 * 
 * 2. Longest Common Subsequence (LCS):
 *    - Finds the longest sequence of characters that appear in both strings in the same order.
 *    - Computes similarity ratio for typo-tolerant fuzzy ranking.
 */

export interface EditOperation {
  type: "match" | "insert" | "delete" | "substitute";
  charA?: string;
  charB?: string;
  cost: number;
}

export interface LevenshteinResult {
  source: string;
  target: string;
  distance: number;
  similarity: number; // 0.0 to 1.0
  dpMatrix: number[][];
  operations: EditOperation[];
  executionTimeMs: number;
}

export interface LCSResult {
  source: string;
  target: string;
  lcsLength: number;
  lcsString: string;
  similarity: number;
  dpTable: number[][];
  executionTimeMs: number;
}

export interface FuzzySuggestion {
  text: string;
  distance: number;
  similarity: number;
  matchedField?: string;
}

/**
 * Computes Levenshtein Edit Distance using Dynamic Programming with full backtracking path.
 */
export function computeLevenshtein(source: string, target: string): LevenshteinResult {
  const startTime = performance.now();
  const s = source.toLowerCase();
  const t = target.toLowerCase();
  const m = s.length;
  const n = t.length;

  // Initialize DP Matrix of size (m+1) x (n+1)
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill DP Matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // Match (cost 0)
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Deletion from source
          dp[i][j - 1] + 1, // Insertion into source
          dp[i - 1][j - 1] + 1 // Substitution
        );
      }
    }
  }

  const distance = dp[m][n];
  const maxLen = Math.max(m, n);
  const similarity = maxLen === 0 ? 1.0 : Number((1.0 - distance / maxLen).toFixed(4));

  // Backtrack to find exact sequence of edit operations
  const operations: EditOperation[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && s[i - 1] === t[j - 1]) {
      operations.unshift({
        type: "match",
        charA: s[i - 1],
        charB: t[j - 1],
        cost: 0,
      });
      i--;
      j--;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      operations.unshift({
        type: "substitute",
        charA: s[i - 1],
        charB: t[j - 1],
        cost: 1,
      });
      i--;
      j--;
    } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
      operations.unshift({
        type: "insert",
        charB: t[j - 1],
        cost: 1,
      });
      j--;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      operations.unshift({
        type: "delete",
        charA: s[i - 1],
        cost: 1,
      });
      i--;
    } else {
      break;
    }
  }

  const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

  return {
    source,
    target,
    distance,
    similarity,
    dpMatrix: dp,
    operations,
    executionTimeMs,
  };
}

/**
 * Computes Longest Common Subsequence (LCS) using Dynamic Programming.
 */
export function computeLCS(source: string, target: string): LCSResult {
  const startTime = performance.now();
  const s = source.toLowerCase();
  const t = target.toLowerCase();
  const m = s.length;
  const n = t.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const lcsLength = dp[m][n];
  const maxLen = Math.max(m, n);
  const similarity = maxLen === 0 ? 1.0 : Number((lcsLength / maxLen).toFixed(4));

  // Backtrack to extract the actual LCS string
  const lcsChars: string[] = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (s[i - 1] === t[j - 1]) {
      lcsChars.unshift(s[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return {
    source,
    target,
    lcsLength,
    lcsString: lcsChars.join(""),
    similarity,
    dpTable: dp,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}

/**
 * Finds "Did you mean?" suggestions from a list of candidate strings using Edit Distance and LCS.
 */
export function findFuzzySuggestions(
  query: string,
  candidates: string[],
  maxDistance = 3,
  limit = 5
): FuzzySuggestion[] {
  if (!query || query.trim().length === 0) return [];

  const q = query.trim().toLowerCase();
  const results: FuzzySuggestion[] = [];

  for (const candidate of candidates) {
    const c = candidate.toLowerCase();
    
    // Quick exact prefix or substring boost
    if (c.includes(q)) {
      results.push({
        text: candidate,
        distance: 0,
        similarity: 1.0,
      });
      continue;
    }

    const { distance, similarity } = computeLevenshtein(q, c);
    
    // Scale allowed distance based on query length
    const allowedDist = Math.min(maxDistance, Math.max(1, Math.floor(q.length * 0.4)));

    if (distance <= allowedDist || similarity >= 0.6) {
      results.push({
        text: candidate,
        distance,
        similarity,
      });
    }
  }

  // Sort by lowest edit distance first, then highest similarity
  results.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    return b.similarity - a.similarity;
  });

  return results.slice(0, limit);
}
