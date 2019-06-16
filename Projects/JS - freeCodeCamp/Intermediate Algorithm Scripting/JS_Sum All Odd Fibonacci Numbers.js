function sumFibs(num) {
  let arr = [0];
  let fib = 1;
  while (fib<=num) {
    arr.push(fib);
    fib = arr[arr.length-2] + arr[arr.length-1];
  }
  return arr.filter(i=> {
    return i % 2 !== 0;
  }).reduce((a,b) => {return a+b},0);


}

console.log(sumFibs(100));



/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
