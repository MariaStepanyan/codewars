// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// SOLUTION

function sumOfDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a)
  let sum = 0
  for (let i = 1; i < sortedArr.length; i++) {
    sum += sortedArr[i - 1] - sortedArr[i]
  }
  return sum
}

console.log(sumOfDifferences([2, 1, 10]))

//SOLUTION 2

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
}

//SOLUTION 3
function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((el, i) => el - arr[i + 1] || 0)
    .reduce((a, c) => a + c, 0)
}
