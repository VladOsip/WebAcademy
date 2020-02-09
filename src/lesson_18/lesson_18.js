import "./lesson_18.scss";
import { DropDown } from "./dropdown";

const Drop = new DropDown(document.querySelector("body"), [
  {
    title: "Hello",
    href: "#"
  },
  {
    title: "Privet",
    href: "#"
  }
]);

Drop.init();

const Drop2 = new DropDown(document.querySelector("body"), [
  {
    title: "SGDSG",
    href: "#"
  },
  {
    title: "SGSD",
    href: "#"
  }
]);
Drop2.init();
