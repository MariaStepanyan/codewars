// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let result = []

  for (let num of a) {
    if (vowels.includes(String.fromCharCode(num))) {
      result.push(String.fromCharCode(num))
    } else {
      result.push(num)
    }
  }

  return result
}

//   SOLUTION 2

const isVow = (a) => a.map((x) => ('aeiou'.includes((y = String.fromCharCode(x))) ? y : x))
