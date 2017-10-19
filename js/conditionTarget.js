//Variables
var a = prompt('Value a:');
var b = prompt('Value b:');

//Result
var value = (a*a)-(2*a*b)+(b*b);

if (value > 0) {
	console.log('Result is positive => ' + value);
} else if (value < 0) {
	console.log('Result is negative => ' + value);
} else {
	console.log('Result is equal zero => ' + value);
}