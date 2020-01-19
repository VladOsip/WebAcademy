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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework13/homework13.js":
/*!**************************************!*\
  !*** ./src/homework13/homework13.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework13.scss */ "./src/homework13/homework13.scss");
/* harmony import */ var _homework13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework13_scss__WEBPACK_IMPORTED_MODULE_0__);

var containerRoot = document.querySelector(".container");
var blocks = containerRoot.querySelectorAll(".container__block");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var activeIndex = 0;

var toggleOff = function toggleOff() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove("active");
  }
};

var activeBlock = function activeBlock() {
  blocks[activeIndex].classList.add("active");
}; // Для выделения по клике на блок
// for (let i = 0; i < blocks.length; i++) {
//   blocks[i].onclick = function() {
//     toggleOff();
//     activeIndex = i;
//     activeBlock();
//     console.log("On Click");
//   };
// }


var changeIndexRight = function changeIndexRight() {
  if (activeIndex + 1 < blocks.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};

var changeIndexLeft = function changeIndexLeft() {
  if (activeIndex - 1 > -1) {
    activeIndex -= 1;
  } else {
    activeIndex = 3;
  }
};

var toggleClickRight = function toggleClickRight() {
  toggleOff();
  console.log("NEXT");
  changeIndexRight();
  activeBlock(0);
};

var toggleClickLeft = function toggleClickLeft() {
  toggleOff();
  console.log("PREV");
  changeIndexLeft();
  activeBlock(0);
};

nextButton.onclick = toggleClickRight;
prevButton.onclick = toggleClickLeft;

/***/ }),

/***/ "./src/homework13/homework13.scss":
/*!****************************************!*\
  !*** ./src/homework13/homework13.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/*!********************************************!*\
  !*** multi ./src/homework13/homework13.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework13/homework13.js */"./src/homework13/homework13.js");


/***/ })

/******/ });
//# sourceMappingURL=homework13.js.map