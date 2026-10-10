import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class CorpusLoader {
    public static List<TravelRecord> loadRecords(String directoryPath) {
        List<TravelRecord> records = new ArrayList<>();
        File dir = new File(directoryPath);
        
        if (!dir.exists() || !dir.isDirectory()) {
            System.err.println("Corpus directory not found at relative path: " + dir.getAbsolutePath());
            // Fallback for this specific project structure if run from a different working directory
            dir = new File("c:/dsa_3_project/corpus");
            if (!dir.exists() || !dir.isDirectory()) {
                System.err.println("Corpus directory also not found at absolute path: " + dir.getAbsolutePath());
                return records;
            }
            System.out.println("Found corpus directory at absolute path: " + dir.getAbsolutePath());
        }

        File[] files = dir.listFiles((d, name) -> name.endsWith(".txt"));
        if (files == null) return records;

        for (File file : files) {
            try {
                List<String> lines = Files.readAllLines(file.toPath());
                int id = 0;
                String name = "", type = "", city = "", state = "", description = "", keywords = "";
                
                for (String line : lines) {
                    if (line.startsWith("ID: ")) id = Integer.parseInt(line.substring(4).trim());
                    else if (line.startsWith("Name: ")) name = line.substring(6).trim();
                    else if (line.startsWith("Type: ")) type = line.substring(6).trim();
                    else if (line.startsWith("City: ")) city = line.substring(6).trim();
                    else if (line.startsWith("State: ")) state = line.substring(7).trim();
                    else if (line.startsWith("Description: ")) description = line.substring(13).trim();
                    else if (line.startsWith("Keywords: ")) keywords = line.substring(10).trim();
                }
                
                records.add(new TravelRecord(id, name, type, city, state, description, keywords));
            } catch (IOException | NumberFormatException e) {
                System.err.println("Error reading file " + file.getName() + ": " + e.getMessage());
            }
        }
        
        return records;
    }
}
