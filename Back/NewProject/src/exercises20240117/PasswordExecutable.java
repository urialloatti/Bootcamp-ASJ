package exercises20240117;

import java.util.Scanner;

public class PasswordExecutable {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Cuantas contraseñas desea chequear?");
        int quantity = scanner.nextInt();
        scanner.nextLine();
        String[] passwordStrings = new String[quantity];

        for (int i = 0; i < quantity; i++) {
            System.out.println("Ingrese la contraseña " + i);
            passwordStrings[i] = scanner.nextLine();
        }
        PasswordGenerator password = new PasswordGenerator();
        for (int i = 0; i < passwordStrings.length; i++) {
            password.setPasswordLength(passwordStrings[i].length());
            password.setPassword(passwordStrings[i]);
            String isStrong = (password.checkPassword())? "Fuerte": "Debil";
            System.out.println(passwordStrings[i] + ": " + isStrong);
        }

    }

}
