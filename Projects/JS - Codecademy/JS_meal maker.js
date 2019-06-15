const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appertizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appertizers(appetizersInput) {
    this._courses = appetizersInput;
  },
  set mains(mainsInput) {
    this._courses = mainsInput;
  },
  set desserts(dessertsInput) {
    this._courses = dessertsInput;
  },

  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
  	const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random()*dishes.length)];
  },

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. Total price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers','fried bananas', 5.00);
menu.addDishToCourse('appetizers','fried tofu', 5.00);
menu.addDishToCourse('appetizers','veggie dumplings', 8.00);

menu.addDishToCourse('mains','pizza', 15.00);
menu.addDishToCourse('mains','lasagne', 12.00);
menu.addDishToCourse('mains','risotto', 13.50);

menu.addDishToCourse('desserts','ice cream', 9.00);
menu.addDishToCourse('desserts','brownie', 7.00);
menu.addDishToCourse('desserts','creme caramal', 7.00);

const meal = menu.generateRandomMeal();
console.log(meal);
