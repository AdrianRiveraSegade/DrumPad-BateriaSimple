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

//Aquí declaramos las funciones para reproducir las animaciones y sonidos
function crashPlay() {
  crashC.classList.add("animation");
  crashC2.load();
  crashC2.play();
}

function tomHighPlay() {
  tomHigh.classList.add("animation");
  tomHigh2.load();
  tomHigh2.play();
}
function tomMidPlay() {
  tomMid.classList.add("animation");
  tomMid2.load();
  tomMid2.play();
}
function tomLowPlay() {
  tomLow.classList.add("animation");
  tomLow2.load();
  tomLow2.play();
}
function snarePlay() {
  snareS.classList.add("animation");
  snareS2.load();
  snareS2.play();
}
function ridePlay() {
  rideS.classList.add("animation");
  rideS2.load();
  rideS2.play();
}
function kickPlay() {
  kickS.classList.add("animation");
  kickS2.load();
  kickS2.play();
}
function hitClosPlay() {
  hitClose.classList.add("animation");
  hitClose2.load();
  hitClose2.play();
}
function hitOpPlay() {
  hitOpen.classList.add("animation");
  hitOpen2.load();
  hitOpen2.play();
}
//Aquí hacemos que al hacer click/tap en un elemento se
//reproduzca el sonido y animación correspondientes

crashC.addEventListener("click", (e) => {
  crashPlay();
});

hitClose.addEventListener("click", (e) => {
  hitClosPlay();
});

hitOpen.addEventListener("click", (e) => {
  hitOpPlay();
});

kickS.addEventListener("click", (e) => {
  kickPlay();
});

rideS.addEventListener("click", (e) => {
  ridePlay();
});

snareS.addEventListener("click", (e) => {
  snarePlay();
});

tomHigh.addEventListener("click", (e) => {
  tomHighPlay();
});

tomLow.addEventListener("click", (e) => {
  tomLowPlay();
});

tomMid.addEventListener("click", (e) => {
  tomMidPlay();
});

//Lo mismo que el apartado anterior pero al pulsar la tecla

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      crashPlay();
      break;
    case "s":
      hitOpPlay();
      break;
    case "d":
      hitClosPlay();
      break;
    case "f":
      kickPlay();
      break;
    case "g":
      ridePlay();
      break;
    case "h":
      snarePlay();
      break;
    case "j":
      tomLowPlay();
      break;
    case "k":
      tomMidPlay();
      break;
    case "l":
      tomHighPlay();
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
