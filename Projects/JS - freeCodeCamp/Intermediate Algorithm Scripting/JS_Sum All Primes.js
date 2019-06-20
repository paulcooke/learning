function sumPrimes(num) {
  // make an array containing all the numbers in the range, so we can go through and sieve them with the sieve of eratosthenes.
  let checkArr = []
  for (let i = 2; i<=num; i++) {
    checkArr.push(i);
  };
  //console.log(checkArr)
  // outer loop - get the numbers to divide by (less than or equal to sqrt of the given number)

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // inner loop - check for and eliminate any numbers divisible by the numbers in the outer loop
        for (let j = i*i; j <= num; j += i) {
            checkArr[j-2] = false;
        }
  }

  return checkArr.filter(i=> {return i}).reduce((a,b) => {return a+b},0);
}

console.log(sumPrimes(100));



/*
Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
