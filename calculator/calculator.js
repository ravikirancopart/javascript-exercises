function add (n1, n2) {
	return sum = n1 + n2;	
}

function subtract (n1, n2) {
	return sub = n1 - n2;	
}

function Sum (arr) {
	return arr.reduce((total,curr) => (total + curr),0);
}

function multiply (arr) {
	return arr.reduce((a,b) => a*b)
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
console.log(Sum([1,2,3,4,5]));
console.log(multiply([2,3,5]));
console.log(power(4,3));
console.log(factorial(5));
module.exports = {
	add,
	subtract,
	Sum,
	multiply,
    power,
	factorial
}