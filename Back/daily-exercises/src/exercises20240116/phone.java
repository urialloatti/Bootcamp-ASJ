package exercises20240116;

import java.util.Scanner;

public class phone {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Ingrese su texto: ");
		String text = scanner.nextLine();
		String result = decriptInput(text);
		System.out.println(result);
	}

	public static String decriptInput(String text) {
		StringBuilder result = new StringBuilder();
		int currentNumber = 0;
		int counter = -1;
		for (int i = 0; i < text.length(); i++) {
			char currentChar = text.charAt(i);
			if ((int) currentChar == 32) {
				result.append(obtenerChar(currentNumber, counter));
				counter = -1;
			} else {
				currentNumber = Character.getNumericValue(currentChar);
				counter++;
			}
			if (i == text.length() - 1) {
				result.append(obtenerChar(currentNumber, counter));
			}
		}
		return result.toString();
	}

	public static char obtenerChar(int num, int contador) {
		char[][] dictionary = { { ' ' }, { '.' }, { 'a', 'b', 'c' }, { 'd', 'e', 'f' }, { 'g', 'h', 'i' },
				{ 'j', 'k', 'l' }, { 'm', 'n', 'o' }, { 'p', 'q', 'r', 's' }, { 't', 'u', 'v' },
				{ 'w', 'x', 'y', 'z' } };
		if (num == 7 || num == 9) {
			return (dictionary[num][contador % 4]);
		} else if (num == 0 || num == 1) {
			return (dictionary[num][contador % 1]);
		} else {
			return (dictionary[num][contador % 3]);
		}
	}
}
