package exercises20240115;

import java.util.Scanner;

public class Structures {

	public static void main(String[] args) {
//		Scanner sccanner = new Scanner(System.in);
//		int quantity = -1;
//		int total = 0;
//		float avg;
		
		
		// Ejemplo con for
//		for (int i = 0; i < 2; i++) {
//			System.out.println("Ingrese cuantas notas quiere ingresar");
//			quantity = sccanner.nextInt();
//			if (quantity < 1) {
//				System.out.println("Error, debe ingresar un número positivo");
//				i = 0;
//			} else {
//				i = 2;
//			}
//		}
//		int[] notes =new int[quantity];
//		for (int i = 0; i < quantity; i++) {
//			int currentNote = -1;
//			for (int j = 0; j < 2; j++) {
//				System.out.println("Ingrese la nota " + (i + 1));
//				currentNote = sccanner.nextInt();
//				if (currentNote < 1 || currentNote > 10) {
//					System.out.println("Error, debe ingresar un número entre 1 y 10");
//					j = 0;
//				} else {
//					j = 2;
//				}
//			}
//			notes[i] = currentNote;
//			total += currentNote;
//		}
//		sccanner.close();
//		if (notes.length > 0) {
//			avg = (float) total / notes.length;
//			System.out.println(avg);
//		} else {
//			System.out.println("No se puede calcular el total.");
//		}
//		
		
		// Ejemplo do-while:
//		do {
//			System.out.println("Ingrese cuantas notas quiere ingresar");
//			quantity = sccanner.nextInt();
//			if (quantity < 1) {
//				System.out.println("Error, debe ingresar un número positivo");
//			}
//		} while (quantity < 1);
//		int[] notes =new int[quantity];
//		int counter = 0;
//		do {
//			int currentNote = -1;
//			do {
//				System.out.println("Ingrese la nota " + (1 + counter));
//				currentNote = sccanner.nextInt();
//				if (currentNote < 1 || currentNote > 10) {
//					System.out.println("Error, debe ingresar un número entre 1 y 10");
//				}
//			} while (currentNote < 1 || currentNote > 10);
//			notes[counter] = currentNote;
//			total += currentNote;
//			counter ++;
//		} while (counter < notes.length);
//		sccanner.close();
//		if (notes.length > 0) {
//			avg = (float) total / notes.length;
//			System.out.println(avg);
//		} else {
//			System.out.println("No se puede calcular el total.");
//		}
//		

////		Triangle
//		Scanner scanner = new Scanner(System.in);
//		int total = 0;
//		for (int i = 0; i < 3; i++) {
//			System.out.println("Ingrese el lado " + (i + 1) + " del triángulo.");
//			total += scanner.nextInt();
//		}
//		scanner.close();
//		if (total == 180) {
//			System.out.println("El triángulo es válido.");
//		} else {
//			System.out.println("El triángulo no es válido.");
//		}
		
////		Starts with number?
//		Scanner scanner = new Scanner(System.in);
//		String  cad = scanner.nextLine();
//		scanner.close();
//		if (Character.isDigit(cad.charAt(0))) {
//			System.out.println("Empieza con dígito.");
//		} else if (Character.isAlphabetic(cad.charAt(0))) {
//			System.out.println("Empieza con una letra.");
//		} else {
//			System.out.println("No empieza con número ni con letra.");
//		}
		
////		Sum even numbers
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese el mínimo (inclusive)");
//		int total = 0;
//		int min = scanner.nextInt();
//		int max;
//		do {
//			System.out.println("Ingrese el máximo (no inclusive)");
//			max = scanner.nextInt();
//		} while (max < min);
//		scanner.close();
//		for (int i = min; i < max; i++) {
//			if (i % 2 == 0) {
//				total += i;
//			}
//		}
//		System.out.println("La suma total de los pares es " + total);
		
////		Is a perfect number?
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese el número a evaluar: ");
//		int number = scanner.nextInt();
//		scanner.close();
//		int total = 1;
//		for (int i = 2; i < number; i++) {
//			if (number % i == 0) {
//				total += i;
//			}
//		}
//		if (total == number) {
//			System.out.println("Es un número perfecto.");
//		} else {
//			System.out.println("No es un número perfecto.");
//		}
		
//		Draw the thingy
		Scanner scanner = new Scanner(System.in);
		int rows;
		do {
			System.out.println("Ingrese cuantos renglones desea imprimir.");
			rows = scanner.nextInt();
		} while ( rows < 0);
		scanner.close();
		StringBuilder[] stringArray = {new StringBuilder(), new StringBuilder()};
		for (int i = 0; i < rows - 1; i++) {
			stringArray[0].append("* ");
			stringArray[1].append(" *");
		}
		stringArray[0].append("*");
		for (int i = 0; i < rows; i++) {
			System.out.println(stringArray[i % 2]);
		}
		
	}

}
