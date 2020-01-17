import "./homework12.scss";

const btn_on = document.querySelector(".btn_on");
const btn_off = document.querySelector(".btn_off");
const lights = document.querySelectorAll(".lights");
const redButton = document.querySelector(".red");
const orangeButton = document.querySelector(".orange");
const greenButton = document.querySelector(".green");

const colors = ["green", "orange", "red"];

const toogleOff = () => {
  for (let i = 0; i < colors.length; i++) {
    redButton.style.backgroundColor = "";
    orangeButton.style.backgroundColor = "";
    greenButton.style.backgroundColor = "";
  }
};

for (let i = 0; i < colors.length; i++) {
  btn_on.onclick = () => {
    redButton.style.backgroundColor = colors[i];
  };
  btn_off.onclick = () => {
    toogleOff();
  };
}
