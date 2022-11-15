"use strict";

let numberOfDrumButtons = document.querySelectorAll(".bateria").length;
const crashC = document.querySelector(".a");
const hitOpen = document.querySelector(".s");
const hitClose = document.querySelector(".d");
const kickS = document.querySelector(".f");
const rideS = document.querySelector(".g");
const snareS = document.querySelector(".h");
const tomHigh = document.querySelector(".j");
const tomLow = document.querySelector(".k");
const tomMid = document.querySelector(".l");
const crashC2 = new Audio("sonido/crash.wav");
const hitClose2 = new Audio("sonido/hihat-close.wav");
const hitOpen2 = new Audio("sonido/hihat-open.wav");
const kickS2 = new Audio("sonido/kick.wav");
const rideS2 = new Audio("sonido/ride.wav");
const snareS2 = new Audio("sonido/snare.wav");
const tomHigh2 = new Audio("sonido/tom-high.wav");
const tomLow2 = new Audio("sonido/tom-low.wav");
const tomMid2 = new Audio("sonido/tom-mid.wav");

crashC.addEventListener("click", (e) => {
  crashC2.play();
});

hitClose.addEventListener("click", (e) => {
  hitClose2.play();
});

hitOpen.addEventListener("click", (e) => {
  hitOpen2.play();
});

kickS.addEventListener("click", (e) => {
  kickS2.play();
});

rideS.addEventListener("click", (e) => {
  rideS2.play();
});

snareS.addEventListener("click", (e) => {
  snareS2.play();
});

tomHigh.addEventListener("click", (e) => {
  tomHigh2.play();
});

tomLow.addEventListener("click", (e) => {
  tomLow2.play();
});

tomMid.addEventListener("click", (e) => {
  tomMid2.play();
});

//for (let i = 0; i < numberOfDrumButtons; i++) {
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});
//}

function makeSound(key) {
  switch (key) {
    case "a":
      crashC2.play();
      break;
    case "s":
      hitOpen2.play();
      break;
    case "d":
      hitClose2.play();
      break;
    case "f":
      kickS2.play();
      break;
    case "g":
      rideS2.play();
      break;
    case "h":
      snareS2.play();
      break;
    case "j":
      tomLow2.play();
      break;
    case "k":
      tomMid2.play();
      break;
    case "l":
      tomHigh2.play();
      break;
    default:
      console.log("esa tecla no mi rey");
  }
}
