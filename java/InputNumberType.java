import java.util.*;

class InputNumberType {
	public static void main(String args[]) {
		byte a;
		int b;
		float c;
		double d;
		boolean e;
		String f;
		Scanner ob = new Scanner(System.in);
		System.out.print("Enter a Number of byte type : ");
		a = ob.nextByte();
		System.out.print("Enter a no. of Integer type : ");
		b = ob.nextInt();
		System.out.print("Enter a Number float type : ");
		c = ob.nextFloat();
		System.out.print("Enter a Number double type : ");
		d = ob.nextDouble();
		System.out.print("Enter a Number boolean type : ");
		e = ob.nextBoolean();
		System.out.print("Enter a string: ");
		f = ob.next();
		System.out.println("No. of byte is : " + a);
		System.out.println("No. of Integer is : " + b);
		System.out.println("No. of Float is : " + c);
		System.out.println("No. of Double is : " + d);
		System.out.println("No. of Boolean is : " + e);
		System.out.println("No. of String is : " + f);
	}
}