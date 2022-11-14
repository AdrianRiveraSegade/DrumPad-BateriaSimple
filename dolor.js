"use strict";

console.log("Hola!");

const audio = new Audio("./sonido/crash.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
