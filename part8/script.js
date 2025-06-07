//challenge 1
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("changeTextButton");

button.addEventListener("click", function () {
  paragraph.textContent = " i changed it brodie";
});

//challenge 2
const highlightbutton = document.getElementById("highlightFirstCity");

highlightbutton.addEventListener("click", function () {
  let parent = document.getElementById("example-2");
  parent.children[2].add("highlight");
});

//example 3
const orderbutton = document.getElementById("changeOrder");

orderbutton.addEventListener("click", function () {
  let parentclass = document.getElementById("coffeeOrder");
  parentclass.children[0].textContent = "Espresso";

  parentclass.children[0].style.backgroundColor = "brown";
  parentclass.children[0].style.padding = "10px";
});

//example 4
const button4 = document.getElementById("addNewItem");

button4.addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "Eggs";
  let parent4 = document.getElementById("shoppingList");
  parent4.appendChild(newitem);
});

//example5:
const removebutton = document.getElementById("removeLastTask");

removebutton.addEventListener("click", function () {
  let list = document.getElementById("taskList");
  //list.removeChild[2];
  list.children[2].remove();
});
