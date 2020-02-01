import "./lesson_17.scss";
import { SlideShow } from "./slideshow";
import { Feed } from "../common/feed/feed";

const mySlideShow = new SlideShow(
  document.querySelector(".slideshow-container")
);
mySlideShow.init();
const newsFeed = new Feed(document.querySelector(".feed-container"));
newsFeed.init();
