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

class Bird {
  fly() {
    return `Flying......`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//static methods:

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
console.log(Calculator.add(2, 3));

//getters and setters
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let alice = new Employee("Pragalv", 10000000000000);
console.log(alice._salary);

alice.salary = 40000;

//getters / setters bro code:

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newwidth) {
    if (newwidth > 0) {
      this._width = newwidth;
    } else {
      console.error("width must be a positive value");
    }
  }

  set height(newheight) {
    if (newheight > 0) {
      this._height = newheight;
    } else {
      console.error("height must be a positive value");
    }
  }

  get height() {
    return this._height;
  }

  get width() {
    return this._width;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 4;
console.log(rectangle.width);
console.log(rectangle.height);
