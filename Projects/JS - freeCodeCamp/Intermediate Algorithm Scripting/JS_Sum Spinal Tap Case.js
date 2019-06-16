function spinalCase(str) {
  return str.match(/[A-Z]?[a-z]+/g).filter(i  => {return i!=="wbr"}).join('-').toLowerCase();
}

console.log(spinalCase('thisIsSpinal<wbr>Tap'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));

/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/



/(?=[A-Z\s+\_+\-+])/g
