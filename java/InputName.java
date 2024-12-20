import java.io.*;

class InputName {
	public static void main(String args[]) {
		String ak;
		DataInputStream kk = new DataInputStream(System.in);
		try {
			System.out.print("Enter your name : ");
			ak = kk.readLine();
			System.out.print("Hello," + ak);
		} catch (Exception e) {

		}
	}
}