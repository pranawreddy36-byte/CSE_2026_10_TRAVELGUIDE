/**
 * String Matching Algorithms for Travel Information Retrieval
 * 
 * 1. Knuth-Morris-Pratt (KMP) Algorithm:
 *    - Precomputes the Longest Proper Prefix which is also Suffix (LPS) table in O(m) time.
 *    - Performs pattern matching in O(n) time, avoiding redundant comparisons when mismatches occur.
 * 
 * 2. Rabin-Karp Algorithm:
 *    - Uses rolling polynomial hashing to check pattern occurrences in O(n + m) average time.
 *    - Supports efficient multi-pattern searching by comparing multiple pattern hashes simultaneously.
 */

export interface KMPSearchResult {
  pattern: string;
  indices: number[];
  comparisons: number;
  lpsTable: number[];
  executionTimeMs: number;
}

export interface RabinKarpResult {
  pattern: string;
  indices: number[];
  hashComparisons: number;
  spuriousHits: number;
  charComparisons: number;
  executionTimeMs: number;
}

export interface MultiPatternResult {
  matches: Record<string, number[]>;
  totalMatches: number;
  executionTimeMs: number;
}

/**
 * Precomputes the Longest Proper Prefix which is also Suffix (LPS / Pi) array for KMP.
 * lps[i] stores the length of the longest proper prefix of pattern[0..i]
 * that is also a suffix of pattern[0..i].
 */
export function computeLPSArray(pattern: string): number[] {
  const m = pattern.length;
  const lps = new Array<number>(m).fill(0);
  let len = 0;
  let i = 1;

  while (i < m) {
    if (pattern[i].toLowerCase() === pattern[len].toLowerCase()) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

/**
 * Knuth-Morris-Pratt (KMP) Pattern Searching
 * Time Complexity: O(N + M) where N = text.length, M = pattern.length
 * Space Complexity: O(M) for LPS array
 */
export function kmpSearch(text: string, pattern: string): KMPSearchResult {
  const startTime = performance.now();

  if (!pattern || !text || pattern.length > text.length) {
    return {
      pattern,
      indices: [],
      comparisons: 0,
      lpsTable: [],
      executionTimeMs: 0,
    };
  }

  const lpsTable = computeLPSArray(pattern);
  const indices: number[] = [];
  let comparisons = 0;

  let i = 0; // index for text
  let j = 0; // index for pattern

  const n = text.length;
  const m = pattern.length;

  while (i < n) {
    comparisons++;
    if (text[i].toLowerCase() === pattern[j].toLowerCase()) {
      i++;
      j++;
    }

    if (j === m) {
      indices.push(i - j);
      j = lpsTable[j - 1];
    } else if (i < n && text[i].toLowerCase() !== pattern[j].toLowerCase()) {
      if (j !== 0) {
        j = lpsTable[j - 1];
      } else {
        i++;
      }
    }
  }

  const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

  return {
    pattern,
    indices,
    comparisons,
    lpsTable,
    executionTimeMs,
  };
}

/**
 * Rabin-Karp Pattern Searching with Rolling Hash
 * Time Complexity: Average O(N + M), Worst-case O(N * M)
 * Prime base d = 256 (extended ASCII), Modulo q = 1000000007
 */
export function rabinKarpSearch(
  text: string,
  pattern: string,
  base = 256,
  mod = 1000000007
): RabinKarpResult {
  const startTime = performance.now();

  if (!pattern || !text || pattern.length > text.length) {
    return {
      pattern,
      indices: [],
      hashComparisons: 0,
      spuriousHits: 0,
      charComparisons: 0,
      executionTimeMs: 0,
    };
  }

  const n = text.length;
  const m = pattern.length;
  const indices: number[] = [];

  let pHash = 0; // hash for pattern
  let tHash = 0; // hash for current text window
  let h = 1; // base^(m-1) % mod

  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % mod;
  }

  // Calculate initial hash values
  for (let i = 0; i < m; i++) {
    pHash = (base * pHash + pattern[i].toLowerCase().charCodeAt(0)) % mod;
    tHash = (base * tHash + text[i].toLowerCase().charCodeAt(0)) % mod;
  }

  let hashComparisons = 0;
  let spuriousHits = 0;
  let charComparisons = 0;

  for (let i = 0; i <= n - m; i++) {
    hashComparisons++;
    if (pHash === tHash) {
      // Check character by character to confirm true hit (avoids hash collisions)
      let match = true;
      for (let j = 0; j < m; j++) {
        charComparisons++;
        if (text[i + j].toLowerCase() !== pattern[j].toLowerCase()) {
          match = false;
          spuriousHits++;
          break;
        }
      }

      if (match) {
        indices.push(i);
      }
    }

    // Compute rolling hash for next window
    if (i < n - m) {
      tHash =
        (base * (tHash - text[i].toLowerCase().charCodeAt(0) * h) +
          text[i + m].toLowerCase().charCodeAt(0)) %
        mod;

      // Handle negative modulo in JavaScript
      if (tHash < 0) {
        tHash += mod;
      }
    }
  }

  const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

  return {
    pattern,
    indices,
    hashComparisons,
    spuriousHits,
    charComparisons,
    executionTimeMs,
  };
}

/**
 * Multi-Pattern Rabin-Karp
 * Searches for multiple keywords simultaneously (e.g. ['temple', 'beach', 'hotel', 'biryani'])
 */
export function rabinKarpMultiPattern(
  text: string,
  patterns: string[],
  base = 256,
  mod = 1000000007
): MultiPatternResult {
  const startTime = performance.now();
  const validPatterns = patterns.filter((p) => p && p.trim().length > 0);

  const matches: Record<string, number[]> = {};
  for (const p of validPatterns) {
    matches[p] = [];
  }

  // Group patterns by length for rolling hash windowing
  const byLength = new Map<number, Array<{ pattern: string; hash: number }>>();

  for (const p of validPatterns) {
    const len = p.length;
    let hash = 0;
    for (let i = 0; i < len; i++) {
      hash = (base * hash + p[i].toLowerCase().charCodeAt(0)) % mod;
    }

    if (!byLength.has(len)) {
      byLength.set(len, []);
    }
    byLength.get(len)!.push({ pattern: p, hash });
  }

  const n = text.length;

  for (const [len, patList] of byLength.entries()) {
    if (len > n) continue;

    let h = 1;
    for (let i = 0; i < len - 1; i++) {
      h = (h * base) % mod;
    }

    let tHash = 0;
    for (let i = 0; i < len; i++) {
      tHash = (base * tHash + text[i].toLowerCase().charCodeAt(0)) % mod;
    }

    for (let i = 0; i <= n - len; i++) {
      for (const { pattern, hash } of patList) {
        if (hash === tHash) {
          let match = true;
          for (let j = 0; j < len; j++) {
            if (text[i + j].toLowerCase() !== pattern[j].toLowerCase()) {
              match = false;
              break;
            }
          }
          if (match) {
            matches[pattern].push(i);
          }
        }
      }

      if (i < n - len) {
        tHash =
          (base * (tHash - text[i].toLowerCase().charCodeAt(0) * h) +
            text[i + len].toLowerCase().charCodeAt(0)) %
          mod;
        if (tHash < 0) tHash += mod;
      }
    }
  }

  let totalMatches = 0;
  for (const p in matches) {
    totalMatches += matches[p].length;
  }

  return {
    matches,
    totalMatches,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}
