//1  write a function named makeTea that takes one parameter typeoftea and returns a string like making green tea when called with green tea.
//store the result in a varialbe named teaorder.

function makeTea(typeoftea) {
  teaorder = `making ${typeoftea}`;
  return teaorder;
}
console.log(makeTea("greentea"));

//create a function named orderTea that takes one parameter TeaType. Inside this function creates another function named confirmorder that returns a message like order confirmed for CHai, Call confirmOrder from within ordertea and return the result.

// function orderTea(TeaType) {
//   return confirmOrder(TeaType);
//   function confirmOrder(TeaType) {
//     return console.log(`order confirmed for ${TeaType}`);
//   }
// }
// orderTea("green tea");

//write an arrow function named calculateTotal that takes two parameters : price and quantity . the function should return the total cost by multiplying the pirce and quantity . store the result in a variable named totalCost.

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

// let totalcost = calculateTotal(10, 10);
// console.log(totalcost);

//4 write a function named processTeaOrder that takes another function MakeTea as a parameter and calls it with the argument earl grey.
