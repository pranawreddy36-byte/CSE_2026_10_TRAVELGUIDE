
import java.util.List;
import java.util.Scanner;

/**
 * Console-based travel information search engine.
 * Compile with: javac *.java
 * Run with:     java Main
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("Loading travel records from corpus...");
        List<TravelRecord> records = CorpusLoader.loadRecords("corpus");
        System.out.println("Loaded " + records.size() + " records successfully.");

        TravelSearchEngine engine = new TravelSearchEngine(records);
        boolean running = true;

        try (Scanner scanner = new Scanner(System.in)) {
            while (running) {
                System.out.println("\n===== TRAVEL SEARCH ENGINE =====");
                System.out.println("1. Search");
                System.out.println("2. Display all records");
                System.out.println("3. Show KMP Analysis");
                System.out.println("4. Exit");
                System.out.print("Choose an option: ");

                if (!scanner.hasNextLine()) {
                    break;
                }
                String choice = scanner.nextLine();
                switch (choice) {
                    case "1" -> {
                        System.out.print("Enter search keyword: ");
                        String query = scanner.nextLine();
                        // Calling search logic which utilizes the KMPMatcher algorithm
                        engine.searchAndDisplay(query);
                    }
                    case "2" -> {
                        engine.displayAllRecords();
                    }
                    case "3" -> {
                        KMPMatcher.showAnalysis();
                    }
                    case "4" -> {
                        running = false;
                        System.out.println("Thank you for using the Travel Search Engine.");
                    }
                    default -> {
                        System.out.println("Invalid option. Please choose 1, 2, 3, or 4.");
                    }
                }
            }
        }
    }
}