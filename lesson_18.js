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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_18/dropdown.js":
/*!***********************************!*\
  !*** ./src/lesson_18/dropdown.js ***!
  \***********************************/
/*! exports provided: DropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.scss */ "./src/lesson_18/dropdown.scss");
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DropDown =
/*#__PURE__*/
function () {
  function DropDown(mp, list) {
    _classCallCheck(this, DropDown);

    this.list = list;
    this.mountPoint = mp;
  }

  _createClass(DropDown, [{
    key: "init",
    value: function init() {
      this.render();
      this.renderList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.btn = document.createElement("button");
      this.dropdown = document.createElement("div");
      this.btn.innerHTML = "Dropdown";
      this.btn.classList.add("btn");
      this.dropdown.style.position = "absolute";
      this.dropdown.classList.add("dropdownClass");
      this.mountPoint.appendChild(this.btn);
      this.btn.appendChild(this.dropdown);

      this.btn.onclick = function () {
        _this.dropdown.style.visibility = "visible";
      };
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          this.renderItem(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "renderItem",
    value: function renderItem(list) {
      var _this2 = this;

      this.list = document.createElement("a");
      this.dropdown.appendChild(this.list);
      this.list.innerHTML = list.title;
      this.list.href = list.href;
      this.list.style.display = "flex";
      this.list.style.flexDirection = "column";
      this.list.classList.add("listClass");

      this.list.onclick = function () {
        _this2.btn.innerHTML = _this2.list.innerHTML;
      };
    }
  }]);

  return DropDown;
}();



/***/ }),

/***/ "./src/lesson_18/dropdown.scss":
/*!*************************************!*\
  !*** ./src/lesson_18/dropdown.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_18/lesson_18.js":
/*!************************************!*\
  !*** ./src/lesson_18/lesson_18.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_18_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_18.scss */ "./src/lesson_18/lesson_18.scss");
/* harmony import */ var _lesson_18_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_18_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./src/lesson_18/dropdown.js");


var Drop = new _dropdown__WEBPACK_IMPORTED_MODULE_1__["DropDown"](document.querySelector("body"), [{
  title: "Hello",
  href: "#"
}, {
  title: "Privet",
  href: "#"
}]);
Drop.init();
var Drop2 = new _dropdown__WEBPACK_IMPORTED_MODULE_1__["DropDown"](document.querySelector("body"), [{
  title: "SGDSG",
  href: "#"
}, {
  title: "SGSD",
  href: "#"
}]);
Drop2.init();

/***/ }),

/***/ "./src/lesson_18/lesson_18.scss":
/*!**************************************!*\
  !*** ./src/lesson_18/lesson_18.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 22:
/*!******************************************!*\
  !*** multi ./src/lesson_18/lesson_18.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_18/lesson_18.js */"./src/lesson_18/lesson_18.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_18.js.map