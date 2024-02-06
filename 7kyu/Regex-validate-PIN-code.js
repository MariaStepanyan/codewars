// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTION

function validatePIN(pin) {
  const arr = pin.split('')

  if (!/\d/.test(pin)) {
    return false
  }

  // SOLUTION 1.2
  // if (arr.some((el) => isNaN(+el))) {
  //   return false
  // }

  return arr.length === 4 || arr.length === 6
}

console.log(validatePIN('111234'))

//SOLUTION 2

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }