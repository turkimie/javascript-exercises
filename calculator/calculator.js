function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	const sum = arr.reduce((a, b) => {return a + b}, 0);
	return sum;
}

function multiply (arr) {
	const multiply = arr.reduce((a, b) => {return a * b}, 1);
	return multiply;
	
}

function power(a, b) {
	return a **b;
}

function factorial(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}