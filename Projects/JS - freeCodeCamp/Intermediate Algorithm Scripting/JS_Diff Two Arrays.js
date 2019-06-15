function diffArray(arr1, arr2) {
  var newArr1 = arr1.filter(i=> {return arr2.indexOf(i) === -1});
  //console.log(newArr1)
  var newArr2 = arr2.filter(i=> {return arr1.indexOf(i) === -1});
  //console.log(newArr2)
  return newArr1.concat(newArr2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));




/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.
*/
