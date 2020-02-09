import "./my_project.scss";

class MainPage {
  constructor(mp = document.querySelector(".main")) {
    this.mountPoint = mp;
    this.activeIndex = 0;
  }
  init() {
    console.log(1);
    this.renderSlides();
    this.renderSmallBlock("Award <br> Winning", "50px");
    this.renderSmallBlock("Progress <br> Tracking", "100px");
    this.renderSmallBlock("Easy <br> to Use", "150px");
    this.renderSmallBlock("Interactive and <br> Intuitive", "200px");
    this.renderSmallBlock("High-Quality <br> Content", "250px");
  }
  renderSlides() {
    this.slider = document.createElement("div");
    this.slider.classList.add("main__slider");
    this.mountPoint.appendChild(this.slider);
    this.slideA = document.createElement("div");
    this.slideA.classList.add("main__slider_A");
    this.slideA.classList.add("slides");
    this.slider.appendChild(this.slideA);
    this.slideB = document.createElement("div");
    this.slideB.classList.add("main__slider_B");
    this.slideB.classList.add("slides");
    this.slider.appendChild(this.slideB);
    this.slideC = document.createElement("div");
    this.slideC.classList.add("main__slider_C");
    this.slideC.classList.add("slides");
    this.slider.appendChild(this.slideC);
    this.slides = document.querySelectorAll("slides");
  }
  renderSmallBlock(textBlock, length) {
    this.mountPoint = document.querySelector(".main__content2");
    this.smallBlock = document.createElement("div");
    this.smallBlock.classList.add("small-block");
    this.mountPoint.appendChild(this.smallBlock);
    this.picture = document.createElement("img");
    this.picture.classList.add("small-block_picture");
    this.smallBlock.appendChild(this.picture);
    this.blockText = document.createElement("div");
    this.blockText.innerHTML = textBlock;
    this.blockText.classList.add("small-block_text");
    this.smallBlock.appendChild(this.blockText);
    this.smallBlock.style.left = length;
  }
}

export { MainPage };
