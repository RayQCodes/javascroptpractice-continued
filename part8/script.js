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
