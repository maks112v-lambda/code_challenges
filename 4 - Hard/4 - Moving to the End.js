// Write a function that moves all elements of one type to the end of the array.

// Examples
// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// // Move all the 1s to the end of the array.

// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]

// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.

const filterCB = (arr, item, type) =>
  arr.filter(
    e =>
      ((e === item && type === 'true') || (e !== item && type === 'false')) &&
      true,
  );

function moveToEnd(arr, item) {
  const items = filterCB(arr, item, 'true');

  const array = filterCB(arr, item, 'false');

  return array.concat(items);
}

console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));

console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));

console.log(moveToEnd(['a', 'a', 'a', 'b'], 'a'));
