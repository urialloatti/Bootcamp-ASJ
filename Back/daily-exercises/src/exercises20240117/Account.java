package exercises20240117;

public class Account {
	String owner;
	double ammount;
	
	public Account(String owner) {
		this.owner = owner;
		this.ammount = 0;
	}
	
	public Account(String owner, double initialAmmount) {
		this.owner = owner;
		this.ammount = initialAmmount;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public double getAmmount() {
		return ammount;
	}

	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}

	@Override
	public String toString() {
		return "Cuenta [Dueño =" + owner + ", cantidad =" + ammount + "]";
	}
	
	public void extract(double quantity) {
		if (this.ammount > quantity) {
			this.ammount -= quantity;
		} else {
			this.ammount = 0;
		}
	}
	
	public void deposit(double quantity) {
		if (quantity > 0) {
			this.ammount += quantity;
		}
	}
	
}
