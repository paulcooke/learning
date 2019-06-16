//Ended up using the hints on this one to correctly access the objects, because i was closely circling the answer but couldn't get it to work.

function whatIsInAName(collection, source) {
  // What's in a name?

  //console.log(Object.keys(source))
  // Only change code below this line
  return collection.filter(entry => {
    return Object.keys(source).every(j => {
      return entry[j] === source[j];
    })
  })


  // Only change code above this line

}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));


/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/
