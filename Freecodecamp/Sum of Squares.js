//Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

function sumOfSquares(n) {
	let result = n * (n + 1) * (2 * n + 1) / 6;
	return result;
}