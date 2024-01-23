package exercises20240117_triprograming;

public class TripletProgrammingMain {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Collection collection = new Collection("Mi Coleccion");
        Superhero spiderman = new Superhero("Spider-Man");
        Superhero superman = new Superhero("Superman");
        Superhero batman = new Superhero("Batman");
        superman.setHasCape(true);
        batman.setHasCape(true);
        Dimentions tamaño = new Dimentions(10,10,10);
        collection.addFigurine(new Figurine("aa11",105.5,tamaño,spiderman));
        collection.addFigurine(new Figurine("aa22",90,tamaño,spiderman));
        collection.addFigurine(new Figurine("aa33",15,tamaño,superman));
        collection.addFigurine(new Figurine("aa44",999.99,tamaño,batman));
        collection.addFigurine(new Figurine("aa55",100,tamaño,spiderman));

        System.out.println("Toda la coleccion: "+ collection.toString());
        System.out.println("------------------------------------------------");
        System.out.println("Tienen capa: "+ collection.getAllWithCape());
        System.out.println("------------------------------------------------");
        System.out.println("Mas valioso de la coleccion: "+ collection.mostExpensive());
        System.out.println("------------------------------------------------");
        System.out.println("Volumen de la coleccion: "+ collection.getCollectionTotalVolume());
        System.out.println("------------------------------------------------");
        System.out.println("Valor de la coleccion: "+ collection.getCollectionTotalValue());
    }

}
