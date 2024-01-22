package exercises20240117_triprograming;

public class Superhero {

    private String name, description;
    Boolean hasCape;

    public Superhero(String name) {
        this.name = name;
        this.description = "";
        this.hasCape = false;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean getHasCape() {
        return hasCape;
    }

    public void setHasCape(boolean hasCape) {
        this.hasCape = hasCape;
    }

    @Override
    public String toString() {
        return "SuperHeroe [nombre = " + name + ", descripcion = " + description + ", capa = " + hasCape + "]";
    }


}
