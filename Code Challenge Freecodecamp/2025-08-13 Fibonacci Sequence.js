// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

function fibonacciSequence(start, length) {
  // Handle edge case: if length is 0, return empty array
  if (length === 0) return [];
  
  // Initialize result array with the two starting numbers
  let result = [start[0], start[1]];
  
  // Generate subsequent numbers if length > 2
  for (let i = 2; i < length; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  
  // Return only the requested length
  return result.slice(0, length);
}