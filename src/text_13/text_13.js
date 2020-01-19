import "./text_13.scss";

const blocks = document.querySelector(".block");
const togglerNext = document.querySelector(".next");
const togglerPrev = document.querySelector(".prev");

blocks.onclick = () => {
  blocks.classList.add("active");
};
