package exercises20240117_triprograming;

public class Figurine {

    String code;
    double price;
    Superhero superhero;
    Dimentions dimentions;

    public Figurine(String code, double price, Dimentions dimentions, Superhero superhero) {
        this.code = code;
        this.price = price;
        this.dimentions = dimentions;
        this.superhero = superhero;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Superhero getSuperhero() {
        return superhero;
    }

    public void setSuperhero(Superhero superhero) {
        this.superhero = superhero;
    }

    public Dimentions getDimentions() {
        return dimentions;
    }

    public void setDimentions(Dimentions dimentions) {
        this.dimentions = dimentions;
    }

    public void subirPrecio(double cantidad) {
        if (cantidad > 0)
            this.price += cantidad;
    }

    @Override
    public String toString() {
        return "Figura [codigo=" + code + ", precio=" + price + ",\n\t" + superhero + ",\n\t"
                + dimentions + "]\n";
    }

}
