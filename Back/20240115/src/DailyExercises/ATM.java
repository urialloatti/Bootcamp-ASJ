package DailyExercises;

import java.util.Scanner;

public class ATM {
	public static void main(String[] args) {
		byte option;
		int money = 50;
		StringBuilder movements = new StringBuilder();
		Scanner scanner = new Scanner(System.in);
		do {
			showMenu();
			option = validateOption((byte) 4, scanner);
			switch (option) {
				case 0:
					System.out.println("Muchas gracias por su visita.");
					break;
				case 1:
					money = extractMoney(money, movements, scanner);
					break;
				case 2:
					money = depositMoney(money, movements, scanner);
					break;
				case 3:
					showRemaining(money);
					break;
				case 4:
					System.out.println(movements + "\n");
					showRemaining(money);
					break;
			}
			
		} while (option != 0);
		scanner.close();
		
	}

	public static void showMenu() {
		System.out.println("\nBienvenido al cajero\n");
		System.out.println("¿Que desea hacer?");
		System.out.println("1. Extraer dinero");
		System.out.println("2. Depositar dinero");
		System.out.println("3. Consultar saldo");
		System.out.println("4. Ver últimos movimientos");
		System.out.println("0. Salir");
	}
	
	public static byte validateOption(byte max, Scanner scanner) {
		byte option;
		option = scanner.nextByte();
		while (option < 0 || option > max) {
			System.out.println("Error, debe ingresar un número entre 0 y " + max);
			option = scanner.nextByte();
		}
		return option;			
	}
	
	public static int validatePositive(Scanner scanner) {
		int ammount = scanner.nextInt();
		while (ammount < 0) {
			System.out.println("Error, no puede ingresar un número negativo.");
			ammount = scanner.nextInt();
		}
		return ammount;
	}
	
	public static int extractMoney(int money, StringBuilder movements, Scanner scanner) {
		System.out.println("Cuanto dinero desea extraer?");
		int ammount = validatePositive(scanner);
		if (ammount == 0) {
			System.out.println("Operación cancelada.");
			return money;
		} else if (money > ammount) {
			System.out.println("Extracción realizada con éxito.");
			movements.append("\n* Extracción:   $" + ammount);
			return money - ammount;
		} else {
			System.out.println("Fondos insuficientes.");
			return money;
		}
	}
	
	public static int depositMoney(int money, StringBuilder movements, Scanner scanner) {
		System.out.println("Cuanto dinero desea depositar?");
		int ammount = validatePositive(scanner);
		if (ammount == 0) {
			System.out.println("Operación cancelada.");
			return money;
		} else {
			System.out.println("Dinero depositado con éxito.");
			movements.append("\n* Depósito:     $" + ammount);
			return money + ammount;
		}
	}
	 public static void showRemaining(int money) {
		 System.out.println("Saldo actual:   $" + money);
	 }

}
