// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// SOLUTION

// function removeChar(str) {
//   const arr = str.split('')
//   arr.shift()
//   arr.pop()
//   return arr.join('')
// }

// console.log(removeChar('lalaввllsl'))

// SOLUTION 2

function removeChar(str) {
  return str.slice(1, -1)
}
console.log(removeChar('lalaввllsl'))