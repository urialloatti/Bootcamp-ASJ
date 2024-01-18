package exercises20240117_triprograming;

public class Figura {

	String codigo;
	double precio;
	SuperHeroe superheroe;
	Dimension dimensiones;

	public Figura(String codigo, double precio, Dimension dimension, SuperHeroe superheroe) {
		this.codigo = codigo;
		this.precio = precio;
		this.dimensiones = dimension;
		this.superheroe = superheroe;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public SuperHeroe getSuperheroe() {
		return superheroe;
	}

	public void setSuperheroe(SuperHeroe superheroe) {
		this.superheroe = superheroe;
	}

	public Dimension getDimensiones() {
		return dimensiones;
	}

	public void setDimensiones(Dimension dimensiones) {
		this.dimensiones = dimensiones;
	}

	public void subirPrecio(double cantidad) {
		if (cantidad > 0)
			this.precio += cantidad;
	}

	@Override
	public String toString() {
		return "Figura [codigo=" + codigo + ", precio=" + precio + ", superheroe=" + superheroe + ", dimensiones="
				+ dimensiones + "]\n";
	}

}
