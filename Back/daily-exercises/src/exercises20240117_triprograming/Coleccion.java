package exercises20240117_triprograming;

import java.util.ArrayList;

public class Coleccion {
	String nombreColeccion;
	ArrayList<Figura> listaFiguras;

	public Coleccion(String nombre) {
		this.nombreColeccion = nombre;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}

	public void agregarFigura(Figura figura) {
		this.listaFiguras.add(figura);
	}

	public void subirPrecio(double cantidad, String codigo) {
		for (Figura figura : listaFiguras) {
			if (figura.getCodigo() == codigo)
				figura.subirPrecio(cantidad);
		}
	}

	public String conCapa() {
		StringBuilder capa = new StringBuilder();
		for (Figura figura : listaFiguras) {
			if (figura.getSuperheroe().isCapa())
				capa.append(figura.getSuperheroe().getNombre() + " ");
		}
		return capa.toString();
	}

	public Figura masValioso() {
		Figura valioso = this.listaFiguras.get(0);
		for (Figura figura : listaFiguras) {
			if (figura.getPrecio() > valioso.getPrecio())
				valioso = figura;
		}

		return valioso;
	}

	public double getValorColeccion() {
		double valor = 0;
		for (Figura figura : listaFiguras) {
			valor += figura.getPrecio();
		}
		return valor;
	}

	public double getVolumenColeccion() {
		double volumen = 200;
		for (Figura figura : listaFiguras) {
			volumen += figura.getDimensiones().getVolumen();
		}
		return volumen;
	}
	
	

	@Override
	public String toString() {
		return "Coleccion [nombreColeccion=" + nombreColeccion + ",\n listaFiguras=" + listaFiguras + "]";
	}

}
