package exercises20240117;

public class Person {
    byte age;
    String name;
    char sex;
    float weight;
    float height;
    String dni;

    public Person() {
        this.age = 0;
        this.name = "";
        this.sex = 'H';
        this.height = 0;
        this.weight = 0;
        this.dni = generateDNI();
    }

    public Person(String name, byte age, char sex) {
        this.age = age;
        this.name = name;
        this.sex = checkSex(sex);
        this.height = 0;
        this.weight = 0;
        this.dni = generateDNI();
    }

    public Person(String name, byte age, char sex, float heigth, float weight, String dni) {
        this.age = age;
        this.name = name;
        this.sex = checkSex(sex);
        this.height = heigth;
        this.weight = weight;
        this.dni = dni;
    }

    private char checkSex(char sex) {
        if (sex == 'M' || sex == 'm') {
            return 'M';
        }
        return 'H';
    }

    private String generateDNI() {
        StringBuilder dni = new StringBuilder();
        for (int i = 0; i < 8; i ++) {
            dni.append((char) ((int) (Math.random() * 10) + 48) );
        }
        return dni.toString();
    }

    public byte calculateIMC() {
        if (this.height != 0) {
            float imc = (this.weight / (this.height * this.height));
            if (imc <= 20) {
                return -1;
            }
            if (imc <= 25) {
                return 0;
            }
            return 1;
        }
        return -2;
    }

    public boolean hasReachedAdulthood() {
        return (this.age > 17);
    }

    @Override
    public String toString() {
        return "Person [Edad = " + age + ", Nombre = " + name + ", Sexo = " + sex + ", Peso = " + weight + ", Altura = " + height
                +  ", DNI = " + dni + "]";
    }


}
