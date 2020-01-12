import "./lesson_12.scss";

// const btns = document.querySelectorAll(".btn");

// const toogleOff = () => {
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = "";
//   }
// };

// const toogleOn = btn => {
//   btn.style.backgroundColor = getRandomColor();
// };

// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = () => {
//     toogleOff();
//     toogleOn(btns[i]);
//   };
// }

const btn_on = document.querySelector(".btn_on");
const btn_off = document.querySelector(".btn_off");
const lights = document.querySelectorAll(".light");

const colors = ["red", "orange", "green"];