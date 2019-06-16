function fearNotLetter(str) {
  let checkArr = "abcdefghijklmnopqrstuvwxyz".split('')
  if (checkArr.join('')===str) {
    return undefined;
  } else {
  let strCopy = checkArr.slice(checkArr.indexOf(str[0]),checkArr.indexOf(str[0])+str.length+1);
  let strArr = str.split('');
  return strCopy.filter(i=> {
    return strArr.indexOf(i) === -1;
  }).join('')
  }
}

console.log(fearNotLetter("bcdf"));




/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

/*
let checkStr = "abcdefghijklmnopqrstuvwxyz".split('');
let strArr = str.split('');
return checkStr.filter(i => {
})
*/
