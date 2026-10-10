import java.util.List;

public class TravelSearchEngine {
    private final List<TravelRecord> records;

    public TravelSearchEngine(List<TravelRecord> records) {
        this.records = records;
    }

    public void searchAndDisplay(String query) {
        String normalizedQuery = KMPMatcher.normalize(query);
        if (normalizedQuery.length() == 0) {
            System.out.println("Please enter a non-empty search keyword.");
            return;
        }

        int matchCount = 0;
        int charactersSearched = 0;
        
        System.out.println("\nSearch Query: " + query);
        System.out.println("---");
        
        for (TravelRecord record : records) {
            String searchableText = KMPMatcher.normalize(record.getName() + " " + record.getType() + " "
                    + record.getCity() + " " + record.getState() + " " + record.getDescription() + " "
                    + record.getKeywords());
            charactersSearched += searchableText.length();
            if (KMPMatcher.contains(searchableText, normalizedQuery)) {
                record.display();
                matchCount++;
            }
        }

        System.out.println("\nTotal matches: " + matchCount);
        System.out.println("Characters searched: " + charactersSearched);
        System.out.println("Pattern length: " + normalizedQuery.length());
    }

    public void displayAllRecords() {
        System.out.println("\n===== ALL TRAVEL RECORDS (" + records.size() + ") =====");
        for (TravelRecord record : records) {
            record.display();
        }
    }
}
