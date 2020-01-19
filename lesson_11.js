/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11/lesson_11.js":
/*!************************************!*\
  !*** ./src/lesson_11/lesson_11.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11.scss */ "./src/lesson_11/lesson_11.scss");
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
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
  var isEqual = true;

  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
}

var y = isEqual([0, 2, 3], [0, 2, 3]); //true

var o = isEqual([0, 2, 4], [0, 2, 3]); //false

console.log(y, o);
var t = add(3, 4);
alert(t); // const a = parseInt(prompt("A"));
// const b = parseInt(prompt("B"));
// add(a, b);
// header.onclick = greet;
// greet();
// greet();

/***/ }),

/***/ "./src/lesson_11/lesson_11.scss":
/*!**************************************!*\
  !*** ./src/lesson_11/lesson_11.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 10:
/*!******************************************!*\
  !*** multi ./src/lesson_11/lesson_11.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11/lesson_11.js */"./src/lesson_11/lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11.js.map