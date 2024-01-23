package exercises20240115;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        /*
         * Data types:
         * 	Numerics:
         * 		int
         * 		float
         * 		double
         * 		short
         * 		long
         * 		byte
         * 	Strings:
         * 		String
         * 		char
         * 	Boolean
         * 		boolean
         */

//		System.out.println("Byte: max (" + Byte.MAX_VALUE + "), min (" + Byte.MIN_VALUE + ").");
//		System.out.println("Integer: max (" + Integer.MAX_VALUE + "), min (" + Integer.MIN_VALUE + ").");
//		System.out.println("Double: max (" + Double.MAX_VALUE + "), min (" + Double.MIN_VALUE + ").");
//		System.out.println("Float: max (" + Float.MAX_VALUE + "), min (" + Float.MIN_VALUE + ").");
//		System.out.println("Short: max (" + Short.MAX_VALUE + "), min (" + Short.MIN_VALUE + ").");
//		System.out.println("Long: max (" + Long.MAX_VALUE + "), min (" + Long.MIN_VALUE + ").");
//
//		byte myNumber = 127;
//		int newNumber = (int) myNumber + 1;
//		String numberString = "123";
//		Integer numberInteger = Integer.parseInt(numberString);


        Scanner scanner = new Scanner(System.in);
        String  word = scanner.nextLine();
        scanner.close();
        StringBuilder print = new StringBuilder();
        print.append(word + " → ");
        for (int i = 0; i < word.length(); i++) {
            print.append((int) word.charAt(i));

            if (i != word.length() - 1) {
                print.append(", ");
            }
        }
        System.out.println(print);

    }

}
