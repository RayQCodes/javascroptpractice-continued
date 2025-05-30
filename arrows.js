//arrow functions:

//2 create arrow funcrion takes in name as parameter and hello and returns the greeting

const hello = (name, age) =>
  console.log(`hello ${name} and im ${age} years old`);

hello("PragalvTheMassa", 20);

//create and use a higher order function to set a 5 second delay to run the inner function to say pragalvs current title after 5 seconds

setTimeout(() => console.log("hello my boy"), 3000);

//math reduce and filter on a list or array  and map()

numbers = [1, 2, 3, 4, 5];

//using map functions
//created two new lists squares and cubes and stored squares and cubed values of numbers into the new arrays

const square = numbers.map((num) => Math.pow(num, 2));
console.log(square);

const cube = numbers.map((num) => Math.pow(num, 3));
console.log(cube);
//use the  filter method to filter out any odd numbers within numbers array
//ima a baka
const odd = numbers.filter((num) => {
  if (num % 2 !== 0) {
    return num;
  }
});

console.log(odd);

//use .reduce to find the total amount of numbers in the numbers array
const reduce = numbers.reduce((sum, number) => sum + number, 0);
console.log(reduce);
