function translatePigLatin(str) {
  let vowels = "aeiou".split('');
  let strArr = str.split('');
  if (vowels.includes(str[0])) {
    return str+"way";
  } else {
    let vowelInd = strArr.find(i => {return vowels.includes(i)});
    let strSplice = strArr.splice(0,strArr.indexOf(vowelInd)).join('');
    return strArr.join('') + strSplice + "ay"
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));

/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
