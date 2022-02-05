import javax.sound.sampled.SourceDataLine;

public class function {
    public static void main(String[] args) {
        int x = 10;
        for (int i = 1; i < x; i++) {
            for (int j = x; j >= i - 1; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}