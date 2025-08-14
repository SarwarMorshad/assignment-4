function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }

  return true;
}
// console.log(isSame([1, 2, 3], [1, 2, 3])); // true
// console.log(isSame([2, 5, 6], 256));
