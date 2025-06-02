let computer = {
  cpu: 12,
};
let lenova = { screen: "HD", __proto__: computer };

let tomHardware = {};

console.log(`computer`, lenova.__proto__);
//use proto to access type of prototypes and methods that can be used by pasting code into the browser.

let Car = { tires: 4 };

let tesla = {
  driver: "Chatgpt",
};

Object.setPrototypeOf(tesla, Car);

console.log("tesla", Object.getPrototypeOf(tesla));
