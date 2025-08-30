// Array Duplicates
// Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.
// Only include one instance of each value in the returned array.
    
function findDuplicates(arr) {
  const duplicates = [];
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      seen.add(num);
    }
  }

  return duplicates.sort((a, b) => a - b);
}