import "./homework13.scss";

const containerRoot = document.querySelector(".container");
const blocks = containerRoot.querySelectorAll(".container__block");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let activeIndex = 0;

const toggleOff = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove("active");
  }
};

const activeBlock = () => {
  blocks[activeIndex].classList.add("active");
};

for (let i = 0; i < blocks.length; i++) {
  blocks[i].onclick = function() {
    toggleOff();
    activeIndex = i;
    activeBlock();
    console.log("On Click");
  };
}

const changeIndexRight = () => {
  if (activeIndex + 1 < blocks.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};

const changeIndexLeft = () => {
  if (activeIndex - 1 > -1) {
    activeIndex -= 1;
  } else {
    activeIndex = 3;
  }
};

const toggleClickRight = () => {
  toggleOff();
  console.log("NEXT");
  activeBlock(0);
  changeIndexRight();
};

const toggleClickLeft = () => {
  toggleOff();
  console.log("PREV");
  activeBlock(0);
  changeIndexLeft();
};

nextButton.onclick = toggleClickRight;
prevButton.onclick = toggleClickLeft;
