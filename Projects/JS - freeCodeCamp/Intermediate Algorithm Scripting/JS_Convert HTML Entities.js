function convertHTML(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/\"/g, "&quot;");
  str = str.replace(/\'/g, "&apos;");
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));





/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
