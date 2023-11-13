// DESCRIPTION
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// SOLUTION 1

function XO(str) {
  return (
    str.split('').filter((char) => char == 'x' || char == 'X').length ==
    str.split('').filter((char) => char == 'o' || char == 'O').length
  )
}

// SOLUTION 2

function XO(str) {
  return (
    str.split('').filter((char) => char.toLowerCase() == 'x').length ==
    str.split('').filter((char) => char.toLowerCase() == 'o').length
  )
}

// SOLUTION 3
const XO = (str) => {
  str = str.toLowerCase().split('')
  return (
    str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
  )
}

// SOLUTION 4

function XO(str) {
  return (
    str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
  )
}
