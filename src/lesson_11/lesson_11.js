import "./lesson_11.scss";

// const colors = ["red", "green", "aqua", "magenta"];
// const randomIndex = Math.floor(Math.random() * colors.length);
// const color = colors[randomIndex];
// console.log(color);

// const words = ["Hello world", "john", "teste", "courses"];

// let maxWordLength = 0;
// let longestWord;
// for (let i = 0; i < words.length; i++) {
//   if (maxWordLength < words[i].length) {
//     maxWordLength = words[i].length;
//     longestWord = words[i];
//   }
// }
// console.log(longestWord);

// const product = {
//   name: "iPhone",
//   price: 200,
//   id: "id1"
// };

// const shopingCart = [
//   {
//     name: "iPhone",
//     price: 200,
//     id: "id1"
//   },
//   {
//     name: "iPhone 4",
//     price: 300,
//     id: "id2"
//   },
//   {
//     name: "iPhone SE",
//     price: 400,
//     id: "id3"
//   },
//   {
//     name: "iPhone 6",
//     price: 500,
//     id: "id4"
//   },
//   {
//     name: "iPhone X",
//     price: 600,
//     id: "id5"
//   }
// ];

// let totalPrice = 0; //accumulator

// for (let i = 0; i < shopingCart.length; i++) {
//   const product = shopingCart[i];
//   totalPrice += product.price;
// }

// console.log(totalPrice);

// let prices = 0;
// let maxPrice = 400;
// for (i = 0; i < shopingCart.length; i++) {
//   const product = shopingCart[i];
//   if (product.price < maxPrice) {
//     prices += product.price;
//   }
// }

// console.log(prices);

// const numbers = [0, 13, 25, 46, 67, 78, 90, 100, 119, 300, 450, 600];
// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] <= 100) {
//     newNumbers.push(numbers[i]);
//   }
// }

// function greet() {
//   const name = prompt("Enter ");
//   alert("Hello " + name);
// }

function add(a, b) {
  if (!a || !b || isNaN(a) || isNaN(b)) {
    console.error("INPUT INCORRECT");
  } else {
    return a + b;
  }
}

function isEqual(arrayA, arrayB) {
  let isEqual = true;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

const y = isEqual([0, 2, 3], [0, 2, 3]); //true
const o = isEqual([0, 2, 4], [0, 2, 3]); //false
console.log(y, o);
const t = add(3, 4);
alert(t);
// const a = parseInt(prompt("A"));
// const b = parseInt(prompt("B"));
// add(a, b);

// header.onclick = greet;
// greet();
// greet();
