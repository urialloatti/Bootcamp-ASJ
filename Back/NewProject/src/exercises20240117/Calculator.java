package exercises20240117;

public class Calculator {
    private int num;

    public Calculator(int number) {
        this.num = number;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int sumNumber(int toSum) {
        this.num += toSum;
        return num;
    }

    public int restNumber(int toRest) {
        return this.sumNumber(-1 * toRest);
    }

    public float multiplyNumber(float multiplier) {
        return (float) this.num * multiplier;
    }

    public float divideNumber(float dividend) {
        if (dividend != 0) {
            return this.multiplyNumber(1/dividend);
        }
        return 0f;
    }
}
