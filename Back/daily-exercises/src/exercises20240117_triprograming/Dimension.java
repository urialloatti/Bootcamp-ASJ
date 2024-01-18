package exercises20240117_triprograming;

public class Dimension {

	double alto,ancho,profundidad;
	
	public Dimension() {
		this(0,0,0);
	}

	public Dimension(double alto, double ancho, double profundidad) {
		this.alto = alto;
		this.ancho = ancho;
		this.profundidad = profundidad;
	}
	
	public double getVolumen() {
		return alto*ancho*profundidad;
	}

	@Override
	public String toString() {
		return "\nDimension\n \t[\nalto=" + alto + ",\n ancho=" + ancho + ",\n profundidad=" + profundidad + "\n]";
	}
	
	
	
}
