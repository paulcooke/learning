function convertToRoman(num) {

  let thousandsObj = {'1000': 'M', '2000': 'MM', '3000': 'MMM', '4000': 'MMMM', '5000': 'MMMMM', '6000': 'MMMMMM', '7000': 'MMMMMMM', '8000': 'MMMMMMMM', '9000': 'MMMMMMMMM'};
  let hundredsObj = {'000': '', '100': 'C', '200': 'CC', '300': 'CCC', '400': 'CD', '500': 'D', '600': 'DC', '700': 'DCC', '800': 'DCCC', '900': 'CM'};
  let tensObj = {'00': '', '10': 'X', '20': 'XX', '30': 'XXX', '40': 'XL', '50': 'D', '60': 'LX', '70': 'LXX', '80': 'LXXX', '90': 'XC'}
  let singlesObj = {'0': '', '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX'}

  let numArr = num.toString().split('');
  //console.log(hundredsObj[numArr[0]+"00"])

  let thousands = "";
  let hundreds = "";
  let tens = "";
  let singles = "";
  //console.log(tensObj[numArr[0]+"0"])

    if (num<10) {
        singles = singlesObj[numArr[0]];
    } else if (num<100) {
        tens = tensObj[numArr[0]+"0"];
        singles = singlesObj[numArr[1]];
    } else if (num<1000) {
        hundreds = hundredsObj[numArr[0]+"00"];
        tens = tensObj[numArr[1]+"0"];
        singles = singlesObj[numArr[2]];
    } else  if (num<10000) {
        thousands = thousandsObj[numArr[0]+"000"];
        hundreds = hundredsObj[numArr[1]+"00"];
        tens = tensObj[numArr[2]+"0"];
        singles = singlesObj[numArr[3]];
    }


  return thousands+hundreds+tens+singles;

}

console.log(convertToRoman(99));




/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
