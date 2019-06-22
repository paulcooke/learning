function palindrome(str) {
  let newStr = str.toLowerCase().match(/[a-z0-9]/g).join('');
  console.log(newStr.length)
  console.log(newStr.slice(0,Math.floor(newStr.length/2)))

  if (newStr.length % 2 === 0) {

    return newStr.slice(0,newStr.length/2) === newStr.slice(newStr.length/2).split('').reverse().join('') ? true : false;

  } else {

    return newStr.slice(0,Math.floor(newStr.length/2)) === newStr.slice(Math.ceil(newStr.length/2)).split('').reverse().join('') ? true : false;

  }
}



console.log(palindrome("never odd or even"));


/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/
