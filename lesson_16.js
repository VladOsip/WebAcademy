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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/feed/feed.js":
/*!*********************************!*\
  !*** ./src/common/feed/feed.js ***!
  \*********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony import */ var _feed_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.scss */ "./src/common/feed/feed.scss");
/* harmony import */ var _feed_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feed_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Feed =
/*#__PURE__*/
function () {
  function Feed(mountPoint) {
    _classCallCheck(this, Feed);

    this.mountPoint = mountPoint;
  }

  _createClass(Feed, [{
    key: "init",
    value: function init() {
      this.renderForm();
      this.render();
      this.getPosts();
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this = this;

      this.form = document.createElement("form");
      this.inputTitle = document.createElement("input");
      this.inputImgUrl = document.createElement("input");
      this.btn = document.createElement("button");
      this.form.appendChild(this.inputTitle);
      this.form.appendChild(this.inputImgUrl);
      this.form.appendChild(this.btn);
      this.form.addEventListener("submit", function (e) {
        _this.submitHandler(e);
      });
      this.mountPoint.appendChild(this.form);
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      var data = {
        title: this.inputTitle.value,
        img: this.inputImgUrl.value
      };
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/posts");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(JSON.stringify(data));

      xhr.onload = function () {
        console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 400) {
          _this2.renderPost(JSON.parse(xhr.response));
        }
      };

      console.log(data);
    }
  }, {
    key: "render",
    value: function render() {
      this.container = document.createElement("div");
      this.container.classList.add("feed__container");
      this.mountPoint.appendChild(this.container);
    }
  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this3 = this;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3000/posts");
      xhr.send();

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          var data = JSON.parse(xhr.response);

          _this3.renderPosts(data);
        }
      };
    }
  }, {
    key: "renderPosts",
    value: function renderPosts(posts) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var post = _step.value;
          this.renderPost(post);
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
    key: "renderPost",
    value: function renderPost(post) {
      var div = document.createElement("div");
      div.classList.add("post");
      var img = document.createElement("img");
      img.classList.add("post__img");
      img.src = post.img;
      var title = document.createElement("h2");
      title.textContent = post.title;
      title.classList.add("post__title");
      div.appendChild(img);
      div.appendChild(title);
      this.container.appendChild(div);
    }
  }]);

  return Feed;
}();



/***/ }),

/***/ "./src/common/feed/feed.scss":
/*!***********************************!*\
  !*** ./src/common/feed/feed.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_feed_feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/feed/feed */ "./src/common/feed/feed.js");


var body = document.querySelector("body");
var feed = new _common_feed_feed__WEBPACK_IMPORTED_MODULE_1__["Feed"](body);
feed.init();

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 19:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16.js.map