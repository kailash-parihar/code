
// Write a program to input a character and print its ASCII value.
import java.io.*;

class ASCIIValue {
	public static void main(String arwrwr[]) {
		char c;
		DataInputStream iop = new DataInputStream(System.in);
		try {
			System.out.print("Enter a Character: ");
			c = (char) iop.read(); // Fix: Read the input as int and cast it to char
			System.out.println("You Entered: " + c);
			System.out.println("ASCII Value: " + (int) c);
		} catch (Exception e) {
			System.out.println("Error: " + e);
		}
	}
}
