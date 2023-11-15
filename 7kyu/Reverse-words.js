// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION 1

function reverseWords(str) {
  return str
    .split(' ')
    .map((str) => str.split('').reverse().join(''))
    .join(' ')
}

// SOLUTION 2

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

// SOLUTION 3

function reverseWords(str) {
  let res = ''
  let i
  while (str.length > 0) {
    i = str.indexOf(' ')
    if (i == 0) {
      res += ' '
      str = str.slice(1)
    } else if (i == -1) {
      res += str.split('').reverse().join('')
      str = ''
    } else {
      res += str.slice(0, i).split('').reverse().join('')
      str = str.slice(i)
    }
  }
  return res
}

// SOLUTION 4

function reverseWords(str) {
  function processString(str, res) {
    const i = str.indexOf(' ')
    if (i == 0) {
      res += ' '
      str = str.slice(1)
    } else if (i == -1) {
      res += str.split('').reverse().join('')
      str = ''
    } else {
      res += str.slice(0, i).split('').reverse().join('')
      str = str.slice(i)
    }
    if (str.length > 0) {
      ;[str, res] = processString(str, res)
    }
    return [str, res]
  }
  let res
  ;[str, res] = processString(str, '')
  return res
}
