//Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
//The returned array should have the indices in ascending order.

function findTarget(arr, target) {
  const map = new Map(); // value → index

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      const idx1 = map.get(complement);
      const idx2 = i;
      return [Math.min(idx1, idx2), Math.max(idx1, idx2)];
    }

    map.set(arr[i], i);
  }

  return "Target not found";
}
