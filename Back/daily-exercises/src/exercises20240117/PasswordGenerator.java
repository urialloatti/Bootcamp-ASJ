package exercises20240117;

public class PasswordGenerator {
	private int passwordLength;
	private String password;

	public PasswordGenerator() {
		this.passwordLength = 8;
		this.password = this.generateRandomPassword();
	}

	public PasswordGenerator(int length) {
		this.passwordLength = length;
		this.password = this.generateRandomPassword();
	}

	public int getPasswordLength() {
		return passwordLength;
	}

	public void setPasswordLength(int passwordLength) {
		this.passwordLength = passwordLength;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String generateRandomPassword() {
		int[][] passGeneratorInts = { { 65, 90 }, { 48, 57 }, { 97, 122 } };
		StringBuilder pass = new StringBuilder();
		for (int i = 0; i < this.passwordLength; i++) {
			int row = (int) Math.random() * 4;
			int charInt = (int) (Math.random() * (passGeneratorInts[row][1] - passGeneratorInts[row][0]))
					+ passGeneratorInts[row][1];
			pass.append((char) charInt);
		}
		return pass.toString();
	}

	public boolean checkPassword() {
		int uppercase = 0;
		int lowercase = 0;
		int digit = 0;
		for (int i = 0; i < this.password.length(); i++) {
			char currentChar = this.password.charAt(i);
			if (Character.isDigit(currentChar)) {
				digit++;
			} else if (Character.isLowerCase(currentChar)) {
				lowercase++;
			} else if (Character.isUpperCase(currentChar)) {
				uppercase++;
			}
		}

		System.out.println(uppercase + lowercase + digit);
		return (uppercase > 2 && lowercase > 1 && digit > 5);
	}

	public boolean checkPassword(String password) {
		int uppercase = 0;
		int lowercase = 0;
		int digit = 0;
		for(int i = 0; i < password.length(); i ++) {
			char currentChar = password.charAt(i);
			if (Character.isDigit(currentChar)) {
				digit ++;
			} else if(Character.isLowerCase(currentChar)) {
				lowercase ++;
			} else if (Character.isUpperCase(currentChar)) {
				uppercase ++;
			}
		}
		return (uppercase > 2 && lowercase > 1 && digit > 5);
	}
	
}
