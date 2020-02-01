import "./lesson_14.scss";

// import { commentForm } from "./comment-form";

// import { garland } from "./garland";

// garland(100, 1500, 2);

// commentForm();

// function User(name) {
//   this.name = name;
//   this.hello = "world";
// }

// User.prototype.greet = function() {
//   console.log(this.name);
// };

// const user1 = new User("Vlad");
// const user1 = new User("John");

// console.log(user1);
// console.log(user2);

// const template = `
// <article class="hello">
// <h1 class="header">${prompt("Header")}</h1>
// <p class="test">${prompt("content")}</p>
// </article>
// `;
// const header = document.createElement("h1");
// const article = document.createElement("article");
// const p = document.createElement("p");

// const body = document.querySelector("body");
// body.innerHTML = template;

// body.appendChild(article);

// console.log(header);

// function greeting() {
//   console.log("hello " + this.name);
// }

// const user = {
//   name: "Vlad",
//   greet: greeting
// };

// const user2 = {
//   name: "John",
//   greet: greeting
// };

// user.greet();
// user2.greet();

function User(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

User.prototype.test = function() {
  console.log(this.firstName + this.secondName);
};

const user1 = new User("Vlad", "Osipenko");
const user2 = new User("John", "Likovskii");

console.log(user1);
console.log(user2);
