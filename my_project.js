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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my_project/main_page.js":
/*!*************************************!*\
  !*** ./src/my_project/main_page.js ***!
  \*************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _my_project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_project.scss */ "./src/my_project/my_project.scss");
/* harmony import */ var _my_project_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_my_project_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MainPage =
/*#__PURE__*/
function () {
  function MainPage() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector(".main");

    _classCallCheck(this, MainPage);

    this.mountPoint = mp;
    this.activeIndex = 0;
  }

  _createClass(MainPage, [{
    key: "init",
    value: function init() {
      console.log(1);
      this.renderSlides();
      this.renderSmallBlock("Award <br> Winning", "50px");
      this.renderSmallBlock("Progress <br> Tracking", "100px");
      this.renderSmallBlock("Easy <br> to Use", "150px");
      this.renderSmallBlock("Interactive and <br> Intuitive", "200px");
      this.renderSmallBlock("High-Quality <br> Content", "250px");
    }
  }, {
    key: "renderSlides",
    value: function renderSlides() {
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
  }, {
    key: "renderSmallBlock",
    value: function renderSmallBlock(textBlock, length) {
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
  }]);

  return MainPage;
}();



/***/ }),

/***/ "./src/my_project/my_project.js":
/*!**************************************!*\
  !*** ./src/my_project/my_project.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_project_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my_project.scss */ "./src/my_project/my_project.scss");
/* harmony import */ var _my_project_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_my_project_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_page */ "./src/my_project/main_page.js");


var myMainPage = new _main_page__WEBPACK_IMPORTED_MODULE_1__["MainPage"]();
myMainPage.init();

/***/ }),

/***/ "./src/my_project/my_project.scss":
/*!****************************************!*\
  !*** ./src/my_project/my_project.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 23:
/*!********************************************!*\
  !*** multi ./src/my_project/my_project.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/my_project/my_project.js */"./src/my_project/my_project.js");


/***/ })

/******/ });
//# sourceMappingURL=my_project.js.map