function smallestCommons(arr) {
  let numsArr = [];
  arr.sort((a,b) => {return a-b});
  console.log(arr)
  for (let i = arr[0]; i<=arr[1]; i++) {
    numsArr.push(i);
  };
  numsArr.sort((a,b) => {return b-a})
  console.log(numsArr)


  let answer = numsArr[0];
  console.log(answer)
  while (true) {
    if (numsArr.every(i=> {return answer%i === 0})) {
      break;
    } else {
    answer += numsArr[0]
    }
  }



  return answer;
}


console.log(smallestCommons([23, 18]));


/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
