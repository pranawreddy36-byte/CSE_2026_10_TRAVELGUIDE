/**
 * Suffix Array and LCP (Longest Common Prefix) Algorithms
 * 
 * Suffix Array:
 * - An array of integers giving the starting positions of all sorted suffixes of a text.
 * - Allows fast substring search in O(M * log N) time via binary search.
 * - Space-efficient alternative to Suffix Trees.
 * 
 * LCP Array:
 * - lcp[i] contains the length of the longest common prefix between suffix SA[i] and suffix SA[i-1].
 * - Kasai's algorithm computes the LCP array in linear O(N) time.
 * - Used to identify repeated phrases, common tourism themes, and cluster related attractions.
 */

export interface SuffixArrayData {
  text: string;
  suffixArray: number[];
  lcpArray: number[];
  executionTimeMs: number;
}

export interface SuffixSearchResult {
  pattern: string;
  indices: number[];
  binarySearchSteps: number;
  executionTimeMs: number;
}

export interface CorpusDocument {
  id: string;
  type: "destination" | "hotel" | "restaurant" | "attraction";
  name: string;
  content: string;
  slug?: string;
}

export interface IndexedCorpus {
  combinedText: string;
  suffixArray: number[];
  lcpArray: number[];
  docOffsets: Array<{ start: number; end: number; doc: CorpusDocument }>;
}

/**
 * Constructs a Suffix Array for a given string text.
 * Sorts all suffixes lexicographically.
 */
export function buildSuffixArray(text: string): SuffixArrayData {
  const startTime = performance.now();
  const n = text.length;
  const suffixArray: number[] = new Array<number>(n);
  const lowerText = text.toLowerCase();

  for (let i = 0; i < n; i++) {
    suffixArray[i] = i;
  }

  // Fast lexicographic comparison avoiding string allocation / localeCompare overhead
  suffixArray.sort((a, b) => {
    if (a === b) return 0;
    const maxLen = n - Math.max(a, b);
    for (let k = 0; k < maxLen; k++) {
      const ca = lowerText.charCodeAt(a + k);
      const cb = lowerText.charCodeAt(b + k);
      if (ca !== cb) return ca - cb;
    }
    return (n - a) - (n - b);
  });

  // Compute LCP using Kasai's Algorithm in O(N)
  const lcpArray = computeLCPArray(text, suffixArray);

  const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

  return {
    text,
    suffixArray,
    lcpArray,
    executionTimeMs,
  };
}

/**
 * Kasai's Algorithm for Longest Common Prefix (LCP) computation
 * Time Complexity: O(N)
 */
export function computeLCPArray(text: string, suffixArray: number[]): number[] {
  const n = text.length;
  if (n === 0) return [];

  const lcp = new Array<number>(n).fill(0);
  const rank = new Array<number>(n).fill(0);

  for (let i = 0; i < n; i++) {
    rank[suffixArray[i]] = i;
  }

  let h = 0;
  for (let i = 0; i < n; i++) {
    if (rank[i] > 0) {
      const k = suffixArray[rank[i] - 1]; // predecessor suffix in SA
      while (
        i + h < n &&
        k + h < n &&
        text[i + h].toLowerCase() === text[k + h].toLowerCase()
      ) {
        h++;
      }
      lcp[rank[i]] = h;
      if (h > 0) {
        h--;
      }
    }
  }

  return lcp;
}

/**
 * Performs Substring Search on Suffix Array using Two Binary Searches
 * Time Complexity: O(M * log N) where M = pattern length, N = text length
 */
export function suffixArraySearch(
  text: string,
  suffixArray: number[],
  pattern: string
): SuffixSearchResult {
  const startTime = performance.now();
  const pat = pattern.toLowerCase();
  const m = pat.length;
  const n = suffixArray.length;

  if (m === 0 || n === 0) {
    return { pattern, indices: [], binarySearchSteps: 0, executionTimeMs: 0 };
  }

  let steps = 0;

  // Find lower bound (first suffix having pattern as prefix)
  let low = 0;
  let high = n - 1;
  let lowerBound = -1;

  while (low <= high) {
    steps++;
    const mid = Math.floor((low + high) / 2);
    const suffixSub = text.slice(suffixArray[mid], suffixArray[mid] + m).toLowerCase();

    if (suffixSub >= pat) {
      if (suffixSub === pat) {
        lowerBound = mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (lowerBound === -1) {
    return {
      pattern,
      indices: [],
      binarySearchSteps: steps,
      executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
    };
  }

  // Find upper bound (last suffix having pattern as prefix)
  low = lowerBound;
  high = n - 1;
  let upperBound = lowerBound;

  while (low <= high) {
    steps++;
    const mid = Math.floor((low + high) / 2);
    const suffixSub = text.slice(suffixArray[mid], suffixArray[mid] + m).toLowerCase();

    if (suffixSub === pat) {
      upperBound = mid;
      low = mid + 1;
    } else if (suffixSub < pat) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const indices: number[] = [];
  for (let i = lowerBound; i <= upperBound; i++) {
    indices.push(suffixArray[i]);
  }

  // Sort indices in ascending appearance in text
  indices.sort((a, b) => a - b);

  return {
    pattern,
    indices,
    binarySearchSteps: steps,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}

/**
 * Builds an index over multiple travel documents (destinations, hotels, restaurants, attractions)
 * using a single concatenated text corpus with delimiter tokens.
 */
export function buildCorpusIndex(documents: CorpusDocument[]): IndexedCorpus {
  const DELIM = " \u0001 "; // Non-printable delimiter token
  const parts: string[] = [];
  const docOffsets: Array<{ start: number; end: number; doc: CorpusDocument }> = [];

  let currentOffset = 0;

  for (const doc of documents) {
    const docText = `${doc.name}: ${doc.content} (${doc.type})`;
    parts.push(docText);

    docOffsets.push({
      start: currentOffset,
      end: currentOffset + docText.length,
      doc,
    });

    currentOffset += docText.length + DELIM.length;
  }

  const combinedText = parts.join(DELIM);
  const { suffixArray, lcpArray } = buildSuffixArray(combinedText);

  return {
    combinedText,
    suffixArray,
    lcpArray,
    docOffsets,
  };
}

/**
 * Searches the IndexedCorpus for a query string and returns the matched documents.
 */
export function searchCorpusIndex(
  index: IndexedCorpus,
  query: string
): Array<{ doc: CorpusDocument; occurrences: number }> {
  if (!query || query.trim().length === 0) return [];

  const { indices } = suffixArraySearch(index.combinedText, index.suffixArray, query);
  if (indices.length === 0) return [];

  const docCountMap = new Map<string, { doc: CorpusDocument; count: number }>();

  for (const matchIdx of indices) {
    // Locate which document this offset belongs to
    for (const entry of index.docOffsets) {
      if (matchIdx >= entry.start && matchIdx < entry.end) {
        const existing = docCountMap.get(entry.doc.id);
        if (existing) {
          existing.count++;
        } else {
          docCountMap.set(entry.doc.id, { doc: entry.doc, count: 1 });
        }
        break;
      }
    }
  }

  return Array.from(docCountMap.values())
    .sort((a, b) => b.count - a.count)
    .map((item) => ({ doc: item.doc, occurrences: item.count }));
}
