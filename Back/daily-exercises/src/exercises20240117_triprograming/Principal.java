package exercises20240117_triprograming;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Coleccion coleccion = new Coleccion("Mi Coleccion");
		SuperHeroe spiderman = new SuperHeroe("Spider-Man");
		SuperHeroe superman = new SuperHeroe("Superman");
		SuperHeroe batman = new SuperHeroe("Batman");
		superman.setCapa(true);
		batman.setCapa(true);
		Dimension tamaño = new Dimension(10,10,10);
		coleccion.agregarFigura(new Figura("aa11",105.5,tamaño,spiderman));
		coleccion.agregarFigura(new Figura("aa22",90,tamaño,spiderman));
		coleccion.agregarFigura(new Figura("aa33",15,tamaño,superman));
		coleccion.agregarFigura(new Figura("aa44",999.99,tamaño,batman));
		coleccion.agregarFigura(new Figura("aa55",100,tamaño,spiderman));
		
		System.out.println("Toda la coleccion: "+ coleccion.toString());
		System.out.println("------------------------------------------------");
		System.out.println("Tienen capa: "+ coleccion.conCapa());
		System.out.println("------------------------------------------------");
		System.out.println("Mas valioso de la coleccion: "+ coleccion.masValioso());
		System.out.println("------------------------------------------------");
		System.out.println("Volumen de la coleccion: "+ coleccion.getVolumenColeccion());
		System.out.println("------------------------------------------------");
		System.out.println("Valor de la coleccion: "+ coleccion.getValorColeccion());
	}

}
