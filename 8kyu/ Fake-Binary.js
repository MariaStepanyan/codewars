// DESCRIPTION
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// SOLUTION 1

function fakeBin(x) {
  return x
    .split('')
    .map((char) => (Number(char) >= 5 ? 1 : 0))
    .join('')
}

// SOLUTION 1.2

function fakeBin(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('')
}

// SOLUTION 2

function fakeBin(x) {
  return x
    .split('')
    .reduce((result, char) => (result += Number(char) >= 5 ? '1' : '0'), '')
}

// SOLUTION 3

function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1))
}
