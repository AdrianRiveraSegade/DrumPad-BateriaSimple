"use strict";

const botonesBateria = document.querySelectorAll(".bateria");

const crash = new Audio("./sonido/crash.wav");
const hatClose = new Audio("./sonido/hithat-close.wav");
const hatOpen = new Audio("./sonido/hithat-open.wav");
const kick = new Audio("./sonido/kick.wav");
const ride = new Audio("./sonido/ride.wav");
const snare = new Audio("./sonido/snare.wav");
const tomLow = new Audio("./sonido/tom-low.wav");
const tomMid = new Audio("./sonido/tom-mid.wav");
const tomHigh = new Audio("./sonido/tom-high.wav");

for (let i = 0; i < botonesBateria; i++) {
  document
    .querySelectorAll(".bateria")
    [i].addEventListener("click", function () {
      const buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
    });

  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
  });
}

function makeSound(key) {
  switch (key) {
    case "a":
      crash.play();
      break;
    case "s":
      hatClose.play();
      break;
  }
}
