// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// or example,
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

// SOLUTION 1

function countSheeps(sheep) {
  return sheep.reduce((acc, elem) => (elem === true ? acc + 1 : acc), 0)
}

//  SOLUTION 2

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length
}
