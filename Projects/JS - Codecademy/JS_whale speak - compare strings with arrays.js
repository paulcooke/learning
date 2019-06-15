let input = 'The cats are having a cuddling competition!';

const vowels = ['a', 'e', 'i', 'o', 'u'];
//console.log(vowels);
let resultArray = [];

for (let i=0; i<input.length; i++) {
 	//console.log(input.charAt(i));
  //console.log(input[i]);
  for (let v=0; v<vowels.length; v++) {
  //console.log(vowels[v]);

    if (input[i] === vowels[v]) {
//			console.log(vowels[v]);
				if (input[i] === 'e') {
         	resultArray.push('ee');
        } else if (input[i] === 'u') {
         	resultArray.push('uu');
        } else {
          resultArray.push(input[i]);
        }
    }
  }
}

let stringWhale = resultArray.join('');
//let concatenated = stringWhale.concat();
let allCaps = stringWhale.toUpperCase();

console.log(allCaps);
