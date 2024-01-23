package exercises20240117_triprograming;


import java.util.ArrayList;

public class Collection {
    String collectionName;
    ArrayList<Figurine> FigurineList;

    public Collection(String name) {
        this.collectionName = name;
        this.FigurineList = new ArrayList<Figurine>();
    }

    public String getCollectionName() {
        return collectionName;
    }

    public void setCollectionName(String colectionName) {
        this.collectionName = colectionName;
    }

    public void addFigurine(Figurine figurine) {
        this.FigurineList.add(figurine);
    }

    public void raisePrice(double quantity, String code) {
        for (Figurine figurine : FigurineList) {
            if (figurine.getCode().equals(code))
                figurine.subirPrecio(quantity);
        }
    }

    public String getAllWithCape() {
        StringBuilder cape = new StringBuilder();
        for (Figurine figurine : FigurineList) {
            if (figurine.getSuperhero().getHasCape()) {
                cape.append(figurine.getSuperhero().getName());
                cape.append(' ');
            }
        }
        return cape.toString();
    }

    public Figurine mostExpensive() {
        Figurine expensiveFigurine = null;
        if (this.FigurineList.size() > 0) {
            expensiveFigurine = this.FigurineList.getFirst();
            for (Figurine figurine : FigurineList) {
                if (figurine.getPrice() > expensiveFigurine.getPrice())
                    expensiveFigurine = figurine;
            }
        }
        return expensiveFigurine;
    }

    public double getCollectionTotalValue() {
        double value = 0;
        for (Figurine figurine : FigurineList) {
            value += figurine.getPrice();
        }
        return value;
    }

    public double getCollectionTotalVolume() {
        double volume = 200;
        for (Figurine figurine : FigurineList) {
            volume += figurine.getDimentions().getVolume();
        }
        return volume;
    }



    @Override
    public String toString() {
        return "Coleccion [nombreColeccion = " + collectionName + ",\n listaFiguras = \n" + FigurineList + "]";
    }

}