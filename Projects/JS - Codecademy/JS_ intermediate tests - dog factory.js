// Write your code here:// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name, 
    get name () {
      return this._name;
    },
    set name (newName) {
      this._name = newName;
    },

    _breed: breed,
    get breed () {
      return this._breed;
    },
    set breed (newBreed) {
      this._breed = newBreed;
    },

    _weight: weight,
		get weight () {
      return this._weight;
    },
    set weight (newWeight) {
      this._weight = newWeight
    },

    bark () {
      return 'ruff! ruff!';
    },

    eatTooManyTreats () {
			return this._weight+=1;
    },

  };

}

dogFactory('Joe', 'Pug', 27)


/*Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight
expect weight to be a number
expect name and breed to be strings
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }*/
