let h1 = document.querySelector("h1");

h1.style.display = "inline-block";

let width = h1.clientWidth;

let redBox = document.getElementById("red-box");

redBox.style.width = width;
redBox.style.height = width;
redBox.style.backgroundColor = "#000000";
