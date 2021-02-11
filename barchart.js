"use strict";

window.addEventListener("load", getNumberOfCustomers);

let queueSize = 0;
let array = [];
let counter = 0;
let c = document.querySelector(".barchart").children;

function getNumberOfCustomers() {
  queueSize = Math.floor(Math.random() * 32);
  startCount();
}

function startCount() {
  array.push(queueSize);
  array = array.slice(0, 40);
  console.log(array);
  counter++;
  if (counter > 40) {
    array.shift();
  }
  array.forEach(changeHeight);
  setTimeout(getNumberOfCustomers, 700);
}

function changeHeight() {
  console.log("changeHeight");
  var i;
  for (i = 0; i < c.length; i++) {
    c[i].style.height = array[i] + "%";
  }
}
