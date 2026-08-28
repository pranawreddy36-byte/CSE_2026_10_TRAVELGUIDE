public class KMPMatcher {
    /** Builds the LPS (Longest Prefix which is also Suffix) array in O(m). */
    public static int[] buildLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int prefixLength = 0;
        int position = 1;

        while (position < pattern.length()) {
            if (pattern.charAt(position) == pattern.charAt(prefixLength)) {
                lps[position] = prefixLength + 1;
                prefixLength++;
                position++;
            } else if (prefixLength > 0) {
                prefixLength = lps[prefixLength - 1];
            } else {
                lps[position] = 0;
                position++;
            }
        }
        return lps;
    }

    /** Returns true when pattern occurs in text, using KMP in O(n + m). */
    public static boolean contains(String text, String pattern) {
        if (pattern.length() == 0) {
            return true;
        }
        int[] lps = buildLPS(pattern);
        int textPosition = 0;
        int patternPosition = 0;

        while (textPosition < text.length()) {
            if (text.charAt(textPosition) == pattern.charAt(patternPosition)) {
                textPosition++;
                patternPosition++;
                if (patternPosition == pattern.length()) {
                    return true;
                }
            } else if (patternPosition > 0) {
                patternPosition = lps[patternPosition - 1];
            } else {
                textPosition++;
            }
        }
        return false;
    }

    /** Converts case without using regular expressions or built-in searching. */
    public static String normalize(String value) {
        char[] characters = value.toCharArray();
        for (int position = 0; position < characters.length; position++) {
            characters[position] = Character.toLowerCase(characters[position]);
        }
        return new String(characters);
    }

    public static void showAnalysis() {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        int[] lps = buildLPS(pattern);
        int foundIndex = findIndex(text, pattern);

        System.out.println("\n===== KMP ANALYSIS =====");
        System.out.println("Text: " + text);
        System.out.println("Pattern: " + pattern);
        System.out.print("LPS Array: ");
        for (int value : lps) {
            System.out.print(value + " ");
        }
        System.out.println("\nPattern found at index: " + foundIndex);
        System.out.println("The LPS value records the longest proper prefix that is also a suffix.");
        System.out.println("KMP uses LPS values to skip comparisons after a mismatch.");
        System.out.println("Preprocessing: O(m), searching: O(n), total: O(n + m), space: O(m).");
    }

    private static int findIndex(String text, String pattern) {
        int[] lps = buildLPS(pattern);
        int textPosition = 0;
        int patternPosition = 0;
        while (textPosition < text.length()) {
            if (text.charAt(textPosition) == pattern.charAt(patternPosition)) {
                textPosition++;
                patternPosition++;
                if (patternPosition == pattern.length()) {
                    return textPosition - patternPosition;
                }
            } else if (patternPosition > 0) {
                patternPosition = lps[patternPosition - 1];
            } else {
                textPosition++;
            }
        }
        return -1;
    }
}
