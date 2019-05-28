// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9])  ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.

const progressDays = days => {
  return days.filter((c, i, n) => c < n[i + 1]).length;
};

console.log(progressDays([3, 4, 1, 2]));

console.log(progressDays([10, 11, 12, 9, 10]));

console.log(progressDays([6, 5, 4, 3, 2, 9]));

console.log(progressDays([9, 9]));
