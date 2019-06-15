function sumAll(arr) {
  let newArr = arr.sort((a,b) => {return a-b});
  console.log(newArr)
  let numArr = []
  for (let i=newArr[0]; i <= newArr[newArr.length-1]; i++) {
      numArr.push(i);
  }
  console.log(numArr)
  return numArr.reduce((a,b) => {return a+b},0);
}

console.log(sumAll([11, 4]));



/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
