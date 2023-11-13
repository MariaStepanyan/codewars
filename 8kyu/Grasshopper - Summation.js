// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// SOLUTION 1

var summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

// SOLUTION 2

var summation = function (num) {
  let sum = 0
  let i = 1
  while (i <= num) {
    sum += i
    i++
  }
  return sum
}

// SOLUTION 3

var summation = function (num) {
  let sum = 0
  let i = 1
  do {
    sum += i
    i++
  } while (i <= num)
  return sum
}

// SOLUTION 4 (сумма арифметической прогрессии)

function summation(num) {
  return (num * (num + 1)) / 2
}
