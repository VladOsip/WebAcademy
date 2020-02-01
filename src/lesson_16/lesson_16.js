import "./lesson_16.scss";
import { Feed } from "../common/feed/feed";
const body = document.querySelector("body");
const feed = new Feed(body);
feed.init();
