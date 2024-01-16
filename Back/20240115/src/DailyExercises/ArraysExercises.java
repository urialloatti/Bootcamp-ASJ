package DailyExercises;

import java.util.Arrays;
import java.util.Scanner;

public class ArraysExercises {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		byte option;
		int[][] matrix = null;
		do {
			showMenu();
			option = validateOption((byte) 8, scanner);
			switch (option) {
				case 1: {
					System.out.println("Muchas gracias por su visita.");
					break;
				}
				case 2: {
					exercise2(scanner);
					break;
				}
				case 3: {
					exercise3(scanner);
					break;
				}
				case 4: {
					matrix = exercise4(scanner);
					break;
				}
				case 5: {
					if (matrix != null) {
						exercise5(matrix, scanner);
					} else {
						System.out.println("Error, debe ejecutar la opción 4 antes de ejecutar esta.");
					}
					break;
				}
				case 6: {
					exercise6(scanner);
					break;
				}
				case 7: {
					exercise7();
					break;
				}
				case 8: {
					exercise8(scanner);
				}
			}

		} while (option != 1);
		scanner.close();

	}

	public static void showMenu() {
		System.out.println("\nBienvenido al menu\n");
		System.out.println("¿Que desea hacer?");
		System.out.println("1. Salir");
		System.out.println("2. Ejercicio 2 (desplazar array)");
		System.out.println("3. Ejercicio 3 (ordenar pares)");
		System.out.println("4. Ejercicio 4 (crear matiz)");
		System.out.println("5. Ejercicio 5 (sumar columna de matriz)");
		System.out.println("6. Ejercicio 6 (Menu de opciones matriz)");
		System.out.println("7. Ejercicio 7 (El de los hombres y mujeres)");
		System.out.println("8. Ejercicio 8 (Encriptación)");
		
	}

	public static byte validateOption(byte max, Scanner scanner) {
		byte option;
		option = scanner.nextByte();
		while (option < 1 || option > max) {
			System.out.println("Error, debe ingresar un número entre 1 y " + max);
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

	public static int validatePositive(Scanner scanner, int max) {
		int ammount = scanner.nextInt();
		while (ammount < 0 || ammount > max) {
			System.out.println("Error, no puede ingresar un número negativo.");
			ammount = scanner.nextInt();
		}
		return ammount;
	}

	public static void exercise2(Scanner scanner) {
		System.out.println("Cual es el largo que desea que tenga el array?");
		int quantity = validatePositive(scanner);

		int[] numbers = new int[quantity];
		for (int i = 0; i < quantity; i++) {
			System.out.println("Ingrese el " + i + "° número del array");
			numbers[i] = scanner.nextInt();
		}
		System.out.println("Array orriginal:");
		System.out.println(Arrays.toString(numbers));
		numbers = reverseArray(numbers);
		System.out.println("Array desplazado");
		System.out.println(Arrays.toString(numbers));
	}

	public static int[] reverseArray(int[] numbers) {
		int aux = numbers[0];
		for (int i = 1; i < numbers.length; i++) {
			int change = numbers[i];
			numbers[i] = aux;
			aux = change;
		}
		numbers[0] = aux;
		return numbers;
	}

	public static void exercise3(Scanner scanner) {
		System.out.println("Cual es el largo que desea que tenga el array?");
		int quantity = validatePositive(scanner);

		int[] numbers = new int[quantity];
		for (int i = 0; i < quantity; i++) {
			numbers[i] = (int) (Math.random() * 100);
		}
		System.out.println("Array orriginal:");
		System.out.println(Arrays.toString(numbers));
		numbers = filterEvens(numbers);
		System.out.println("Array reordenado");
		System.out.println(Arrays.toString(numbers));
	}

	public static int[] filterEvens(int[] numbers) {
		int left = 0;
		int right = numbers.length - 1;
		int[] filteredArray = new int[right + 1];
		for (int num : numbers) {
			if (num % 2 == 0) {
				filteredArray[left] = num;
				left++;
			} else {
				filteredArray[right] = num;
				right--;
			}
		}
		return filteredArray;
	}

	public static int[][] exercise4(Scanner scanner) {
		System.out.println("Cuantas filas desea que tenga la matriz?");
		int rows = validatePositive(scanner);
		System.out.println("Cuantas columnas desea que tenga la matriz?");
		int cols = validatePositive(scanner);

		int[][] numbers = new int[rows][cols];
		boolean numberExists;
		int aux;
		for (int i = 0; i < numbers.length; i++) {
			for (int j = 0; j < numbers[i].length; j++) {
				numberExists = false;
				do {
					aux = (int) (Math.random() * (rows * cols) + 1);
					numberExists = checkMatrix(aux, numbers);
				} while (numberExists);
				numbers[i][j] = aux;
			}
		}
		System.out.println("La matriz creada es");
		for (int i = 0; i < numbers.length; i++) {
			System.out.println(Arrays.toString(numbers[i]));
		}
		return numbers;
	}

	public static boolean checkMatrix(int num, int[][] matrix) {
		for (int i = 0; i < matrix.length; i++) {
			for (int j = 0; j < matrix[i].length; j++) {
				if (matrix[i][j] == num) {
					return true;
				}
			}
		}
		return false;
	}

	public static void exercise5(int[][] matrix, Scanner scanner) {
		char direction = validateInput5(scanner);
		int location;
		int sum = 0;
		switch (direction) {
		case 'r':
			System.out.println("Elija la fila a sumar (inicia en 0)");
			location = validatePositive(scanner, matrix.length);
			for (int i = 0; i < matrix[location].length; i++) {
				sum += matrix[location][i];
			}
			System.out.println("La fila elegida suma " + sum);
			break;
		case 'c':
			System.out.println("Elija la columna a sumar (inicia en 0)");
			location = validatePositive(scanner, matrix.length);
			for (int i = 0; i < matrix.length; i++) {
				sum += matrix[i][location];
			}
			System.out.println("La columna elegida suma " + sum);
			break;
		}
	}

	public static char validateInput5(Scanner scanner) {
		scanner.nextLine();
		System.out.println("Desea contar por filas 'r' o columnas 'c'?");
		String input = scanner.nextLine();
		char firstChar = input.toLowerCase().charAt(0);
		while (firstChar != 'c' && firstChar != 'r') {
			System.out.println("Error, ingrese solo la letra 'c' o 'r'.");
			input = scanner.nextLine();
			firstChar = input.toLowerCase().charAt(0);
		}
		return firstChar;
	}

	public static void exercise6(Scanner scanner) {
		byte option;
		int[][] matrix = null;
		int sum;
		do {
			showMenuEx6();
			option = validateOption((byte) 8, scanner);
			switch (option) {
				case 1: {
					System.out.println("Saliendo del ejercicio 6.");
					break;
				}
				case 2: {
					matrix = new int[4][4];
					for (int i = 0; i < matrix.length; i++) {
						for (int j = 0; j < matrix[i].length; j++) {
							int num = (int) (Math.random() * 100);
							System.out.println("El número del casillero " + i + " " + j + " es: " + num);
							matrix[i][j] = num;
						}
					}
					break;
				}
				case 3: {
					if (matrix != null) {
						int col = validatePositive(scanner, 4);
						sum = 0;
						for (int i = 0; i < matrix.length; i++) {
							sum += matrix[i][col];
						}
						System.out.println("La columna elegida suma " + sum);
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
				case 4: {
					if (matrix != null) {
						int row = validatePositive(scanner, 4);
						sum = 0;
						for (int i = 0; i < matrix[row].length; i++) {
							sum += matrix[row][i];
						}
						System.out.println("La fila elegida suma " + sum);
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
				case 5: {
					if (matrix != null) {
						sum = 0;
						for (int i = 0; i < matrix.length; i++) {
							sum += matrix[i][i];
						}
						System.out.println("La diagonal principal suma " + sum);
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
				case 6: {
					if (matrix != null) {
						sum = 0;
						for (int i = 0; i < matrix.length; i++) {
							sum += matrix[(matrix.length - 1) - i][i];
						}
						System.out.println("La diagonal inversa suma " + sum);
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
				case 7: {
					if (matrix != null) {
						sum = 0;
						int counter = 0;
						for (int i = 0; i < matrix.length; i++) {
							for (int j = 0; j < matrix[i].length; j++) {
								sum += matrix[i][j];
								counter += 1;
							}
						}
	
						System.out.println("La media de los numeros de la matriz es " + (sum / counter));
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
				case 8: {
					if (matrix != null) {
						for (int i = 0; i < matrix.length; i++) {
							System.out.println(Arrays.toString(matrix[i]));
						}
					} else {
						System.out.println("Primero debes rellenar la matriz");
					}
					break;
				}
			}
		} while (option != 1);
	}

	public static void showMenuEx6() {
		System.out.println("\nBienvenido al menu del ejercicio 6");
		System.out.println("¿Que desea hacer?");
		System.out.println("1. Salir");
		System.out.println("2. Rellenar matriz");
		System.out.println("3. Sumar una fila");
		System.out.println("4. Sumar una columna");
		System.out.println("5. Sumar diagonal principal");
		System.out.println("6. Sumar diagonal inversa");
		System.out.println("7. Media de todos los valores");
		System.out.println("8. Ver matriz");
	}
	
	public static void exercise7() {
		int[] sexes = new int[10];
		int[] itWorks = new int[10];
		int[] salary = new int[10];
		int aux;
		int sum;
		for (int i = 0; i < 10; i++) {
			sexes[i] = (int) Math.ceil(Math.random() * 2);
			itWorks[i] = (int) Math.ceil(Math.random() * 2);
			salary[i] = (int) ((Math.random() * 1401) + 600);
//			System.out.println("Sexo: " + sexes[i] + "; Trabaja: " + itWorks[i] + "; Salario: " + salary[i]);
		}
		
		// Porcentaje de hombres
		aux = percentageSex(1, sexes);
		System.out.println("El porcentaje de hombres: " + aux + "%");
		
		// Porcentaje de mujeres
		aux = percentageSex(2, sexes);
		System.out.println("El porcentaje de mujeres: " + aux + "%");
		
		// Porcentaje de hombres que trabajan
		aux = percentageWorks(1, sexes, itWorks);
		System.out.println("El porcentaje de hombres que trabajan: " + aux + "%");
		
		// Porcentaje de mujeres que trabajan
		aux = percentageWorks(2, sexes, itWorks);
		System.out.println("El porcentaje de mujeres que trabajan: " + aux + "%");
		
		// Sueldo promedio de hombres que trabajan
		aux = averageSalary(1, sexes, itWorks, salary);
		System.out.println("El sueldo promedio de hombres que trabajan: " + aux);
		
		// Sueldo promedio de mujeres que trabajan
		aux = averageSalary(1, sexes, itWorks, salary);
		System.out.println("El sueldo promedio de mujeres que trabajan: " + aux);		
	}
	
	public static int percentageSex(int sex, int[] sexes) {
		int counter = 0;
		for (int i = 0; i < sexes.length; i++) {
			if (sexes[i] == sex) {
				counter ++;
			}
		}
		return counter / sexes.length * 100;
	}
	
	public static int percentageWorks(int sex, int[] sexes, int[] itWorks) {
		int sexCounter = 0;
		int wokCounter = 0;
		for (int i = 0; i < sexes.length; i++) {
			if (sexes[i] == sex) {
				sexCounter ++;
				if (itWorks[i] == 1) {
					wokCounter ++;
				}
			}
		}
		if (sexCounter > 0) {
			return wokCounter / sexCounter * 100;
		} 
		return 0; 
	}
	
	public static int averageSalary(int sex, int[] sexes, int[] itWorks, int[] salary) {
		int aux = 0;
		int sum = 0;
		for (int i = 0; i < 10; i++) {
			if (sexes[i] == 1 && itWorks[i] == 1) {
				aux ++;
				sum += salary[i];
			}
		}
		
		return sum / aux;
	}
	
	public static void exercise8(Scanner scanner) {
		scanner.nextLine();
		System.out.println("Ingrese la cadena a encriptar:");
		String cad = scanner.nextLine();
		StringBuilder encriptedCad = new StringBuilder();
		for (int i = 0; i < cad.length(); i++) {
			int currentChar = (int) cad.charAt(i);
			if ((currentChar >= 65 && currentChar <= 88) || (currentChar >= 97 && currentChar <= 120)) {
				encriptedCad.append(Character.toString( currentChar + 2));
			} else if (currentChar == 89 || currentChar == 90 || currentChar == 121 || currentChar == 122) {
				encriptedCad.append(Character.toString( currentChar - 24));
			} else {
				encriptedCad.append(cad.charAt(i));
			}
		}
		System.out.println("La cadena encriptada es:");
		System.out.println(encriptedCad);
	}

}
