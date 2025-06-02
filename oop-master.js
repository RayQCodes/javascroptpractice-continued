//in js erything is an object - object literal
let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car came out in ${this.year}`;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let pragalv = new Person("pragalv", 20);
console.log(pragalv.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myarray = [1, 2, 3];
console.log(myarray.hitesh());
let dinosaur = new Animal();

//starting classes:

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a Car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let VehOne = new Vehicle("Toyota", "Corolla");
console.log(VehOne.make);

//OOP stuff mainly encapsulation below

class BankAccount {
  #balance = 0; //encapsulates nad hides balance from outside source only can access internally

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

//Abstraction below:
//hiding the complex implementation behind the hood

class CoffeeMachine {
  start() {
    //call DB
    //filter value
    return `starting the machine...`;
  }
  brewCoffee() {
    //complex calculation
    return `brewing the coffee`;
  }

  pressstartbutton() {
    let message1 = this.start();
    let message2 = this.brewCoffee();
    return message1 + "+" + message2;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressstartbutton());

//polymorphism
