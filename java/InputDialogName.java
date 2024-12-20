import javax.swing.*;

public class InputDialogName {
	public static void main(String qwer[]) {

		String userName = JOptionPane.showInputDialog("Enter your name:");
		JOptionPane.showMessageDialog(null, "Hello, " + userName + "!");
	}
}
