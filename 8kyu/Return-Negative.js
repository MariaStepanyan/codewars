// DESCRIPTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// SOLUTION

function makeNegative(num) {
  return num > 0 ? -num : num
}

// SOLUTION 2

function makeNegative(num) {
  return -Math.abs(num)
}
