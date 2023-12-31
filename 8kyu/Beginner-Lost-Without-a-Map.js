// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// SOLUTION 1

function maps(x) {
  return x.map((elem) => elem * 2)
}

// SOLUTION 2 BAD!

function maps(x) {
  return x.reduce((acc, elem) => [...acc, elem * 2], [])
}
