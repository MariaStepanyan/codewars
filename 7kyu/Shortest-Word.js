// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION

function findShort(s) {
  return Math.min(...s.split(' ').map((word) => word.length))
}

// SOLUTION 2

function findShort(s) {
  return s
    .split(' ')
    .reduce((min, word) => Math.min(min, word.length), Infinity)
}
