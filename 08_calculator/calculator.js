const add = function(a,b) {
    return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum += arr[i];}
    return sum;
}

const multiply = function(arr) {
    let sum = 1;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum *= arr[i];
    }
    return sum;
};

const power = function(num, power) {
    let sum = num;
	for (let i = 1; i < power; i++) {
		sum *= num;
	}
	return sum;
};

const factorial = function(num) {
    let sum = 1;
	for (let i = 1; i <= num; i++) {
        sum *= i
    }
    return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
