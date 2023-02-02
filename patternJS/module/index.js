function add(a, b) {
	return a + b
}
function substract(a, b) {
	return b - a
}
function divide(a, b) {
	return a / b
}
function multiply(b, a) {
	return a * b
}

module.export = { add, substract, divide, multiply }
console.log(add(1, 2), substract(1, 2), divide(1, 2), multiply(1, 2))
