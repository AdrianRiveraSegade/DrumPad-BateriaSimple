"use strict";

let numberOfDrumButtons = document.querySelectorAll(".bateria").length;
const crashC = document.querySelector(".a");
const hitClose = document.querySelector(".s");
const hitOpen = document.querySelector(".d");
const kickS = document.querySelector(".f");
const rideS = document.querySelector(".g");
const snareS = document.querySelector(".h");
const tomHigh = document.querySelector(".j");
const tomLow = document.querySelector(".k");
const tomMid = document.querySelector(".l");

crashC.addEventListener("click", (e) => {
  const crashC2 = new Audio("sonido/crash.wav");
  crashC2.play();
});

hitClose.addEventListener("click", (e) => {
  const hitClose = new Audio("sonido/hihat-close.wav");
  hitClose.play();
});

hitOpen.addEventListener("click", (e) => {
  const hitOpen = new Audio("sonido/hihat-open.wav");
  hitOpen.play();
});

kickS.addEventListener("click", (e) => {
  const kickS = new Audio("sonido/kick.wav");
  kickS.play();
});

rideS.addEventListener("click", (e) => {
  const rideS = new Audio("sonido/ride.wav");
  rideS.play();
});

snareS.addEventListener("click", (e) => {
  const snareS = new Audio("sonido/snare.wav");
  snareS.play();
});

tomHigh.addEventListener("click", (e) => {
  const tomHigh = new Audio("sonido/tom-high.wav");
  tomHigh.play();
});

tomLow.addEventListener("click", (e) => {
  const tomLow = new Audio("sonido/tom-low.wav");
  tomLow.play();
});

tomMid.addEventListener("click", (e) => {
  const tomMid = new Audio("sonido/tom-mid.wav");
  tomMid.play();
});

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
  });
}

function makeSound(key) {
  switch (key) {
    case "a":
      const crash = new Audio("sonido/crash.wav");
      crash.play();
      break;
    case "s":
      const hhClose = new Audio("sonido/hihat-close.wav");
      hhClose.play();
      break;
    case "d":
      const hhOpen = new Audio("sonido/hihat-open.wav");
      hhOpen.play();
      break;
    case "f":
      const kick = new Audio("sonido/kick.wav");
      kick.play();
      break;
    case "g":
      const ride = new Audio("sonido/ride.wav");
      ride.play();
      break;
    case "h":
      const snare = new Audio("sonido/snare.wav");
      snare.play();
      break;
    case "j":
      const tomLow = new Audio("sonido/tom-low.wav");
      tomLow.play();
      break;
    case "k":
      const tomMid = new Audio("sonido/tom-mid.wav");
      tomMid.play();
      break;
    case "l":
      const tomHigh = new Audio("sonido/tom-high.wav");
      tomHigh.play();
      break;
    default:
      console.log("esa tecla no mi rey");
  }
}
