import java.io.*;

class ErrorDemo {
	public static void main(String arr[]) {
		int a;
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
			System.out.println("Enter a No. ");
			a = Integer.parseInt(in.readLine());
			System.out.println("You Entered :" + a);
		} catch (Exception e) {
			System.out.println("Error, Please enter valid Number");
		}
	}
}