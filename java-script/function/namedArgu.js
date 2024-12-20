function doAdd(num1, num2) {
    if (arguments.length == 1) {
        console.log(num1 + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + num2);
    }
}
doAdd('kailash ')
doAdd(10)
doAdd('kailash ', 'parihar +', 'sojat') //output not display because condition is false
doAdd('Good Job ', 'Kailash')