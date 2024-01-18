package exercises20240117;

import java.util.Scanner;

public class personsExecutable {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Person person1 = new Person();
		
		System.out.println("Ingrese la edad de la persona 2");
		byte age = scanner.nextByte();
		scanner.nextLine();
		System.out.println("Ingrese el nombre de la persona 2");
		String name = scanner.nextLine();
		System.out.println("Ingrese el sexo de la persona 2 (H o M)");
		char sex = scanner.next().charAt(0);
		scanner.nextLine();
		Person person2 = new Person(name, age, sex);
		
		System.out.println("Ingrese la edad de la persona 3");
		age = scanner.nextByte();
		scanner.nextLine();
		System.out.println("Ingrese el nombre de la persona 3");
		name = scanner.nextLine();
		System.out.println("Ingrese el sexo de la persona 3 (H o M)");
		sex = scanner.next().charAt(0);
		scanner.nextLine();
		System.out.println("Ingrese la altura de la persona 3");
		float height = scanner.nextFloat();
		scanner.nextLine();
		System.out.println("Ingrese el peso de la persona 3");
		float weigth = scanner.nextFloat();
		scanner.nextLine();
		System.out.println("Ingrese el DNI de la persona 3");
		String dni = scanner.nextLine();
		Person person3 = new Person(name, age, sex, height, weigth, dni);
		
		
		System.out.println("El imc de la persona 1 es " + showIMC(person1));
		System.out.println("El imc de la persona 2 es " + showIMC(person2));
		System.out.println("El imc de la persona 3 es " + showIMC(person3));
		
		System.out.println("La persona 1 es " + showAdulthood(person1));
		System.out.println("La persona 2 es " + showAdulthood(person2));
		System.out.println("La persona 3 es " + showAdulthood(person3));
		
		System.out.println(person1.toString());
		System.out.println(person2.toString());
		System.out.println(person3.toString());
		

	}
	
	public static String showIMC(Person person) {
		byte imc = person.calculateIMC();
		switch (imc) {
			case -1: {
				return "por debajo del peso ideal";
			}
			case 0: {
				return "dentro del peso ideal";			
			}
			case 1: {
				return "por encima del peso ideal";
			}
			default: {
				return "imposible de calcular, chequear que el peso y altura no sean 0.";
			}
		}
	}
	
	public static String showAdulthood(Person person) {
		return (person.hasReachedAdulthood())? "mayor de edad": "menor de edad";
	}

}
