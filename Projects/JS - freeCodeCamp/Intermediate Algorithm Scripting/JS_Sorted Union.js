function uniteUnique(arr) {
  var args = [...arguments];
  //console.log(args)
  let finalArr = []
  for (let i=0; i<args.length; i++) {
    for (let j=0; j<args[i].length; j++) {
      //console.log(args[i][j])
      if (finalArr.indexOf(args[i][j]) === -1) {
        //console.log(finalArr)
        finalArr.push(args[i][j]);
      }
    }
  }
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
