//arrow functions:
const pragalv = () => console.log("pragalvs the boss");
pragalv();

//2 create arrow funcrion takes in name as parameter and hello and returns the greeting

const hello = (name, age) => {
  console.log("pragalvy");
  console.log(`hello nice to meet you ${name} Im ${age} years old`);
};
hello("PragalvTheWarlord", 25);

//create and use a higher order function to set a 5 second delay to run the inner function to say pragalvs current title after 5 seconds
setTimeout(() => {
  console.log("Pragalv is Senior Dev");
}, 5000);

//math reduce and filter on a list or array  and map()

//using map functions
//created two new lists squares and cubes and stored squares and cubed values of numbers into the new arrays
let numbers = [1, 2, 3, 4, 5];
let squarefunction = numbers.map((num) => Math.pow(num, 2));
console.log(squarefunction);

let cubes = numbers.map((num) => Math.pow(num, 3));
console.log(cubes);

//use the  filter method to filter out any odd numbers within numbers array

const odd = numbers.filter((num) => num % 2 !== 0);
console.log(odd);

const even = numbers.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(even);

//use .reduce to find the total amount of numbers in the numbers array

const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(total);
