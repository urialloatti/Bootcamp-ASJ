package exercises20240117_triprograming;

public class Dimentions {

    double height, width, depth;

    public Dimentions() {
        this(0,0,0);
    }

    public Dimentions(double height, double width, double depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    public double getVolume() {
        return height * width * depth;
    }

    @Override
    public String toString() {
        return "Dimension [alto = " + height + ", ancho = " + width + ", profundidad = " + depth + "]";
    }

}
