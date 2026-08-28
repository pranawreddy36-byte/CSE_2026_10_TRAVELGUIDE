public class TravelRecord {
    private final int id;
    private final String name;
    private final String type;
    private final String city;
    private final String state;
    private final String description;
    private final String keywords;

    public TravelRecord(int id, String name, String type, String city, String state,
                 String description, String keywords) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.city = city;
        this.state = state;
        this.description = description;
        this.keywords = keywords;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public String getType() { return type; }
    public String getCity() { return city; }
    public String getState() { return state; }
    public String getDescription() { return description; }
    public String getKeywords() { return keywords; }

    public void display() {
        System.out.println("\n--- Record " + id + " ---");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Type: " + type);
        System.out.println("City: " + city);
        System.out.println("State: " + state);
        System.out.println("Description: " + description);
        System.out.println("Keywords: " + keywords);
    }
}
