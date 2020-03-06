import "./my_project.scss";

class MainPage {
  constructor(mp = document.querySelector(".main")) {
    this.mountPoint = mp;
    this.activeIndex = 0;
  }
  init() {
    console.log(1);
    this.renderSocial(".main__header");
    this.renderSlides();
    this.renderSmallBlock(
      "Award <br> Winning",
      "50px",
      "assets/images/Artboard1.png"
    );
    this.renderSmallBlock(
      "Progress <br> Tracking",
      "100px",
      "assets/images/Artboard25.png"
    );
    this.renderSmallBlock(
      "Easy <br> to Use",
      "150px",
      "assets/images/Artboard2.png"
    );
    this.renderSmallBlock(
      "Interactive and <br> Intuitive",
      "200px",
      "assets/images/Artboard3.png"
    );
    this.renderSmallBlock(
      "High-Quality <br> Content",
      "250px",
      "assets/images/Artboard4.png"
    );
    this.renderParagraph();
    this.renderButtonsAppPlay(
      "app-store",
      ".main__content",
      "24%",
      "470px",
      "assets/images/appstore-png.png"
    );
    this.renderButtonsAppPlay(
      "google-play",
      ".main__content",
      "31%",
      "460px",
      "assets/images/googleplay-png.png"
    );
    this.renderButtonsAppPlay(
      "app-store",
      ".main__content2",
      "50%",
      "480px",
      "assets/images/appstore-png.png"
    );
    this.renderButtonsAppPlay(
      "google-play",
      ".main__content2",
      "41%",
      "470px",
      "assets/images/googleplay-png.png"
    );
    this.renderBlockAward(`Kid's Ed Choice </br> (Best App 2023)`, "0px");
    this.renderBlockAward(
      `Parents & Children Digest </br> (Editor's Choise)`,
      "469px"
    );
    this.renderBlockAward(`Tech Toyz Awards </br> (Best Design)`, "938px");
    this.renderBlockAward(
      `Play & Learn Reviewer </br> (Best UX 2023)`,
      "1407px"
    );
    this.renderContent7();
    this.renderContent8();
  }
  renderSocial(where) {
    this.mountPoint = document.querySelector(where);
    this.social = document.createElement("div");
    this.social.classList.add("main__header__social-field");
    this.mountPoint.appendChild(this.social);
    this.socialFB = document.createElement("img");
    this.socialFB.src = "https://img.icons8.com/android/24/000000/facebook.png";
    this.socialFB.classList.add("main__header__social-field_img");
    this.social.appendChild(this.socialFB);
    this.socialINST = document.createElement("img");
    this.socialINST.src =
      "https://img.icons8.com/material-rounded/24/000000/instagram-new.png";
    this.socialINST.classList.add("main__header__social-field_img");
    this.social.appendChild(this.socialINST);
    this.socialYOUT = document.createElement("img");
    this.socialYOUT.src =
      "https://img.icons8.com/material-sharp/24/000000/youtube-play.png";
    this.socialYOUT.classList.add("main__header__social-field_img");
    this.social.appendChild(this.socialYOUT);
  }
  renderSlides() {
    this.mountPoint = document.querySelector(".main");
    this.slider = document.createElement("div");
    this.slider.classList.add("main__slider");
    this.slider.id = "slider";
    this.mountPoint.appendChild(this.slider);
    this.figure = document.createElement("figure");
    this.slider.appendChild(this.figure);
    this.slideA = document.createElement("img");
    this.slideA.src = "assets/images/a.png";
    this.slideA.classList.add("slides");
    this.figure.appendChild(this.slideA);
    this.slideB = document.createElement("img");
    this.slideB.src = "assets/images/b.png";
    this.slideB.classList.add("slides");
    this.figure.appendChild(this.slideB);
    this.slideC = document.createElement("img");
    this.slideC.src = "assets/images/c.png";
    this.slideC.classList.add("slides");
    this.figure.appendChild(this.slideC);
    this.slides = document.querySelectorAll("slides");
  }
  renderSmallBlock(textBlock, length, pictureUrl) {
    this.mountPoint = document.querySelector(".main__content2");
    this.smallBlock = document.createElement("div");
    this.smallBlock.classList.add("small-block");
    this.mountPoint.appendChild(this.smallBlock);
    this.picture = document.createElement("img");
    this.picture.classList.add("small-block_picture");
    this.picture.src = pictureUrl;
    this.smallBlock.appendChild(this.picture);
    this.blockText = document.createElement("div");
    this.blockText.innerHTML = textBlock;
    this.blockText.classList.add("small-block_text");
    this.smallBlock.appendChild(this.blockText);
    this.smallBlock.style.left = length;
  }
  renderParagraph() {
    this.mountPoint = document.querySelector(".main__content2");
    this.paragraph = document.createElement("div");
    this.paragraph.classList.add("paragraph-text");
    this.paragraph.innerHTML = `I'm a paragraph. Click here to add your own text and edit me. It’s easy. </br> Just click “Edit Text” or double click me to add your own content and </br> make changes to the font.`;
    this.mountPoint.appendChild(this.paragraph);
  }
  renderButtonsAppPlay(classAppPlay, buttonDiv, leftPos, topPos, AppPlayUrl) {
    this.mountPoint = document.querySelector(buttonDiv);
    this.appStore = document.createElement("img");
    this.appStore.classList.add(classAppPlay);
    this.appStore.src = AppPlayUrl;
    this.appStore.style.left = leftPos;
    this.appStore.style.top = topPos;
    this.mountPoint.appendChild(this.appStore);
  }
  renderBlockAward(titleAward, leftPosAward) {
    this.mountPoint = document.querySelector(".main__content5");
    this.blockAward = document.createElement("div");
    this.blockAward.classList.add("blockAward");
    this.mountPoint.appendChild(this.blockAward);
    this.badge = document.createElement("img");
    this.badge.classList.add("blockAward_badge");
    this.badge.src = "assets/images/badge.webp";
    this.blockAward.appendChild(this.badge);
    this.textAward = document.createElement("div");
    this.textAward.classList.add("blockAward_title");
    this.textAward.innerHTML = titleAward;
    this.blockAward.appendChild(this.textAward);
    this.blockAward.style.left = leftPosAward;
  }
  renderContent7() {
    this.mountPoint = document.querySelector(".main");
    this.blockTryReadie = document.createElement("div");
    this.blockTryReadie.classList.add("main__content7");
    this.mountPoint.appendChild(this.blockTryReadie);
    this.tryReadie = document.createElement("div");
    this.tryReadie.classList.add("main__content7__try-readie");
    this.blockTryReadie.appendChild(this.tryReadie);
    this.gifBlock = document.createElement("div");
    this.gifBlock.classList.add("main__content7__gif-block");
    this.blockTryReadie.appendChild(this.gifBlock);
    this.readieText = document.createElement("div");
    this.readieText.classList.add("main__content7__try-readie_title");
    this.readieText.innerHTML = "Try Readie </br> for Free";
    this.tryReadie.appendChild(this.readieText);
    this.readieSubText = document.createElement("div");
    this.readieSubText.classList.add("main__content7__try-readie_subtitle");
    this.readieSubText.innerHTML =
      "I'm a paragraph. Click here to </br> add your own text and edit me.";
    this.tryReadie.appendChild(this.readieSubText);
    this.renderButtonsAppPlay(
      "app-store",
      ".main__content7__try-readie",
      "50%",
      "430px",
      "assets/images/appstore-png.png"
    );
    this.renderButtonsAppPlay(
      "google-play",
      ".main__content7__try-readie",
      "69%",
      "420px",
      "assets/images/googleplay-png.png"
    );
    this.renderTabletGif();
  }
  renderTabletGif() {
    this.mountPoint = document.querySelector(".main__content7__gif-block");
    this.tablet = document.createElement("div");
    this.tablet.classList.add("main__content7__gif-block__tablet");
    this.mountPoint.appendChild(this.tablet);
    this.tabletImg = document.createElement("img");
    this.tabletImg.classList.add("main__content7__gif-block__tablet_img");
    this.tabletImg.src = "assets/images/cards-no-text.webp";
    this.tablet.appendChild(this.tabletImg);
  }
  renderContent8() {
    this.mountPoint = document.querySelector(".main");
    this.blockContent8 = document.createElement("div");
    this.blockContent8.classList.add("main__content8");
    this.mountPoint.appendChild(this.blockContent8);
    this.container1 = document.createElement("div");
    this.container1.classList.add("main__content8__containers");
    this.container1Text = document.createElement("h1");
    this.container1Text.classList.add("main__content8__containers__text");
    this.container1Text.innerHTML = "Ask Us Anything!";
    this.container1.appendChild(this.container1Text);
    this.containerInputs = document.createElement("div");
    this.containerInputs.classList.add(
      "main__content8__containers__containerInputs"
    );
    this.container1.appendChild(this.containerInputs);
    this.inputName = document.createElement("input");
    this.inputName.classList.add("main__content8__containers__input");
    this.inputName.placeholder = "Full Name";
    this.containerInputs.appendChild(this.inputName);
    this.inputEmail = document.createElement("input");
    this.inputEmail.classList.add("main__content8__containers__input");
    this.inputEmail.type = "email";
    this.inputEmail.placeholder = "Email";
    this.containerInputs.appendChild(this.inputEmail);
    this.inputMessage = document.createElement("input");
    this.inputMessage.classList.add("main__content8__containers__inputMessage");
    this.inputMessage.placeholder = "Type your message here...";
    this.container1.appendChild(this.inputMessage);
    this.submitButton = document.createElement("button");
    this.submitButton.classList.add("main__content8__containers__button");
    this.submitButton.innerHTML = "Submit";
    this.container1.appendChild(this.submitButton);
    this.blockContent8.appendChild(this.container1);
    this.container2 = document.createElement("div");
    this.container2.classList.add("main__content8__containers");
    this.container2Text = document.createElement("h1");
    this.container2Text.classList.add("main__content8__containers__text");
    this.container2Text.innerHTML =
      "Subscribe for News, Games, </br> Promotions and More!";
    this.container2.appendChild(this.container2Text);
    this.blockContent8.appendChild(this.container2);
  }
}

export { MainPage };
