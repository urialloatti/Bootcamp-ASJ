package exercises20240117_triprograming;

public class SuperHeroe {

	private String nombre, descripcion;
	boolean capa;

	public SuperHeroe(String nombre) {
		this.nombre = nombre;
		this.descripcion = "";
		this.capa = false;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public boolean isCapa() {
		return capa;
	}

	public void setCapa(boolean capa) {
		this.capa = capa;
	}

	@Override
	public String toString() {
		return "SuperHeroe [nombre=" + nombre + ", descripcion=" + descripcion + ", capa=" + capa + "]";
	}
	
	
}
