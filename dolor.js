"use strict";

let numberOfDrumButtons = document.querySelectorAll(".bateria").length;
//En esta sección seleccionamos cada parte de la batería para futuro uso
const crashC = document.querySelector(".a");
const hitOpen = document.querySelector(".s");
const hitClose = document.querySelector(".d");
const kickS = document.querySelector(".f");
const rideS = document.querySelector(".g");
const snareS = document.querySelector(".h");
const tomHigh = document.querySelector(".j");
const tomLow = document.querySelector(".k");
const tomMid = document.querySelector(".l");
//Aquí llamamos a los archivos de audio para usarlos cuando se toque la batería
const crashC2 = new Audio("sonido/crash.wav");
const hitClose2 = new Audio("sonido/hihat-close.wav");
const hitOpen2 = new Audio("sonido/hihat-open.wav");
const kickS2 = new Audio("sonido/kick.wav");
const rideS2 = new Audio("sonido/ride.wav");
const snareS2 = new Audio("sonido/snare.wav");
const tomHigh2 = new Audio("sonido/tom-high.wav");
const tomLow2 = new Audio("sonido/tom-low.wav");
const tomMid2 = new Audio("sonido/tom-mid.wav");
const divBateriaElement = document.querySelector("ul#bateria");

//Aquí hacemos que al hacer click/tap en un elemento se
//reproduzca el sonido y animación correspondientes

crashC.addEventListener("click", (e) => {
  crashC.classList.add("animation");
  crashC2.load();
  crashC2.play();
});

hitClose.addEventListener("click", (e) => {
  hitClose.classList.add("animation");
  hitClose2.load();
  hitClose2.play();
});

hitOpen.addEventListener("click", (e) => {
  hitOpen.classList.add("animation");
  hitOpen2.load();
  hitOpen2.play();
});

kickS.addEventListener("click", (e) => {
  kickS.classList.add("animation");
  kickS2.load();
  kickS2.play();
});

rideS.addEventListener("click", (e) => {
  rideS.classList.add("animation");
  rideS2.load();
  rideS2.play();
});

snareS.addEventListener("click", (e) => {
  snareS.classList.add("animation");
  snareS2.load();
  snareS2.play();
});

tomHigh.addEventListener("click", (e) => {
  tomHigh.classList.add("animation");
  tomHigh2.load();
  tomHigh2.play();
});

tomLow.addEventListener("click", (e) => {
  tomLow.classList.add("animation");
  tomLow2.load();
  tomLow2.play();
});

tomMid.addEventListener("click", (e) => {
  tomMid.classList.add("animation");
  tomMid2.load();
  tomMid2.play();
});

//Lo mismo que el apartado anterior pero al pulsar la tecla

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      crashC.classList.add("animation");
      crashC2.load();
      crashC2.play();
      break;
    case "s":
      hitOpen.classList.add("animation");
      hitOpen2.load();
      hitOpen2.play();
      break;
    case "d":
      hitClose.classList.add("animation");
      hitClose2.load();
      hitClose2.play();
      break;
    case "f":
      kickS.classList.add("animation");
      kickS2.load();
      kickS2.play();
      break;
    case "g":
      rideS.classList.add("animation");
      rideS2.load();
      rideS2.play();
      break;
    case "h":
      snareS.classList.add("animation");
      snareS2.load();
      snareS2.play();
      break;
    case "j":
      tomLow.classList.add("animation");
      tomLow2.load();
      tomLow2.play();
      break;
    case "k":
      tomMid.classList.add("animation");
      tomMid2.load();
      tomMid2.play();
      break;
    case "l":
      tomHigh.classList.add("animation");
      tomHigh2.load();
      tomHigh2.play();
      break;
    default:
      console.log("esa tecla no mi rey");
  }
}

//Retiramos el elemento animation para que se pueda repetir
divBateriaElement.addEventListener("animationend", (e) => {
  const target = e.target;
  target.classList.remove("animation");
});

const grabar = document.querySelector(".record");
const stopRecord = document.querySelector(".stopRecord");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

grabar.addEventListener("click", (e) => {
  grabar.classList.replace("record", "stopRecord");
});

play.addEventListener("click", (e) => {
  play.classList.replace("play", "pause");
});

stopRecord.addEventListener("click", (e) => {
  stopRecord.classList.replace("stopRecord", "record");
});

pause.addEventListener("click", (e) => {
  pause.classList.replace("pause", "play");
});
