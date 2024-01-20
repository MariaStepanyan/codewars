// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// SOLUTION

function getCount(str) {
  return str
    .split('')
    .filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char)).length
}

// SOLUTION 2

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

// SOLUTION

function getCount(str) {
  return str
    .split('')
    .reduce(
      (acc, char) => (['a', 'e', 'i', 'o', 'u'].includes(char) ? ++acc : acc),
      0
    )
}

