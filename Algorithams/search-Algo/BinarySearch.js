const binarySearch = (arr, val) => {
  let right = 0;
  let left = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (arr[middle] !== val && right <= left) {
    // "<" --> this mean 10 < 15 (10 Smaller than 15 )
    if (val < arr[middle]) left = middle - 1;
    else right = middle + 1;
    middle = Math.floor((right + left) / 2);
  }
  return arr[middle] === val ? middle : -1;
};

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 11)
);
