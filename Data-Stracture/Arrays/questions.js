// Reverse string

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// function reverseString(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Wrong input...";
//   }
//   const backWords = [];
//   const totalItems = str.length - 1;

//   for (let i = totalItems; i >= 0; i--) backWords.push(str[i]);
//   return backWords.join("");
// }
// console.log(reverseString("Sourav"));

//. Merge sorted array

function mergeSortedArray(arr1, arr2) {
  const mergedArray = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1 === 0) {
    return arr2;
  }
  if (arr2 === 0) {
    return arr1;
  }

  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      mergedArray.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArray([29], [4, 6, 30]));
