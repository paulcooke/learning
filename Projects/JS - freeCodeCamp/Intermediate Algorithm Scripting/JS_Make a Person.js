var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
    //all the below should manipulate the variable fullName.....
  this.getFullName = function() {
    return fullName;
  }
  this.setFullName = function(name) {
    fullName = name;
  }

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  }
  this.setFirstName = function (first) {
    fullName = first + ' ' + fullName.split(' ')[1];
  }

  this.getLastName = function () {
    return fullName.split(' ')[1];
  }
  this.setLastName = function (last) {
    fullName = fullName.split(' ')[0] + ' ' + last;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
//bob.setFullName("Paul Cooke");
//console.log(bob.getFullName())




/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
