// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// SOLUTION

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((acc, num) => num + acc, 0) / marks.length)
}

console.log(getAverage([1, 5, 87, 45, 8, 8]))
