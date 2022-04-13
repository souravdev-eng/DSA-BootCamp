const LinearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

console.log(LinearSearch([12, 10, 2, 4, 3], 0));
console.log("Hii");
