// DESCRIPTION:
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// SOLUTION

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    a = a.toUpperCase()
    b = b.toUpperCase()
    return a > b ? 1 : a < b ? -1 : 0
    // variant 2:
    // return (a > b) - (a < b)
  })
}

// SOLUTION 2

// function sorter(textbooks) {
//   return textbooks.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
// }

console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))
