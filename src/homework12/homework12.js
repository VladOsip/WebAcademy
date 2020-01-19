import './homework12.scss';

const red = document.querySelector(“.red”);
const yellow = document.querySelector(“.yellow”);
const green = document.querySelector(“.green”);
const btnStart = document.getElementById(“start”);
const btnStop = document.getElementById(“stop”);
const toggleOff = () => {
  red.style.backgroundColor = “”;
  yellow.style.backgroundColor = “”;
  green.style.backgroundColor = “”;
  btnStart.disabled = true; // блокируем кнопку Старт
  btnStop.disabled = false;
};
const toggleOn = () => {
  red.onclick = function() {
    toggleOff();
    red.style.backgroundColor = “red”;
  };
  yellow.onclick = function() {
    toggleOff();
    yellow.style.backgroundColor = “yellow”;
  };
  green.onclick = function() {
    toggleOff();
    green.style.backgroundColor = “green”;
  };
  btnStart.disabled = false;
  btnStop.disabled = true;
};
btnStart.addEventListener(“click”, toggleOff);
btnStop.addEventListener(“click”, toggleOn);