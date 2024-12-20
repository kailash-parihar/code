import javax.swing.*;

class InputDialogBox {
	public static void main(String arr[]) {
		int a;
		String s = JOptionPane.showInputDialog("Enter a no. ");
		a = Integer.parseInt(s);
		JOptionPane.showMessageDialog(null, "You Entered  : " + a);

	}
}