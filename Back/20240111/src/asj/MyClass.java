package asj;

import java.util.Scanner;

public class MyClass {

	public static void main(String[] args) {
//		Integer[] intArray = new Integer[3];
//		Scanner scanner = new Scanner(System.in);
//		for (int i = 0; i < intArray.length; i++) {
//			intArray[i] = scanner.nextInt();
//		}
//		scanner.close();
//		for (int i = 0; i < intArray.length; i ++) {
//			System.out.println(intArray[i]);
//		}
		
//		Scanner scanner = new Scanner(System.in);
//		int intInput = scanner.nextInt();
//		Double doubleInput = scanner.nextDouble();
//		scanner.nextLine();
//		String stringInput = scanner.nextLine();
//		scanner.close();
//		
//		System.out.println("String: " + stringInput);
//		System.out.println("Double: " + doubleInput);
//		System.out.println("Int: " + intInput);
		
//		Scanner scanner = new Scanner(System.in);
//		int input = scanner.nextInt();
//		scanner.close();
//		if (input % 2 == 0 && (input < 6 || input > 20)) {
//			System.out.println("Not Weird");
//		} else {
//			System.out.println("Weird");
//		}
		
//		Scanner scanner = new Scanner(System.in);
//		if (scanner.hasNextInt()) {
//			int input = scanner.nextInt();
//			scanner.close();
//			if (input > 1 && input < 21) {
//				for (int i = 1; i < 11; i++) {
//					int result = input * i;
//					String messageString = Integer.toString(input) + " x " + Integer.toString(i) + " : " + Integer.toString(result);
//					System.out.println(messageString);
//				}
//			} else {
//				System.out.println("The number is outside the required range.");
//			}
//		} else {
//			System.out.println("The input is not a string.");
//		}
		
		Scanner scanner = new Scanner(System.in);
		
		int query = scanner.nextInt();
		scanner.nextLine();
		String[] inputStrings = new String[query];
		
		for (int i = 0; i < query; i++) {
			inputStrings[i] = scanner.nextLine();
		}
		scanner.close();
		
		for (String string : inputStrings) {
			String[] abnString = string.split(" ");
			int a = Integer.parseInt(abnString[0]);
			int b = Integer.parseInt(abnString[1]);
			int n = Integer.parseInt(abnString[2]);
			int subtotal = 0;
			for (int i = 0; i < n; i++) {
				int current =  (int)(a + Math.pow(2, i) * b);
				System.out.print(subtotal + current);
				subtotal += current;
				System.out.print(" ");
			}
			System.out.print("\n");
		}

	}

}
