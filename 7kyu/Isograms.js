// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// SOLUTION
function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .filter((num, i, nums) => nums.indexOf(num) !== i).length == 0
  )
}

//  SOLUTION 2

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}
