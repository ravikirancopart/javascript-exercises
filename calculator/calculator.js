function add (num1, num2) {
	return sum = num1 + num2;	
}

function subtract (num1, num2) {
	return sub = num1 - num2;	
}

function sum (arr) {
	return arr.reduce((total,current ) => total + current, 0);
}

function multiply (array) {
	return array.reduce((a,b) => a*b)
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
	if (a == 0 ){
		return 1
	}
	for (var i = a - 1; i >= 1; i--){
		a *= i;
	}
	return a;
}


console.log(add(2,3));
console.log(subtract(4,1));
console.log(sum([]));
console.log(multiply([2,3,5]));
console.log(power(4,3));
console.log(factorial(5));
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}