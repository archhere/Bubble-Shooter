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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Bubbles = __webpack_require__(/*! ./src/bubbles.js */ "./src/bubbles.js");
var Hero = __webpack_require__(/*! ./src/hero.js */ "./src/hero.js");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var innerWidth = 800;
var innerHeight = 600;
canvas.width = innerWidth;
canvas.height = innerHeight;

var colors = ['#FF005D', '#0085B6', '#0BB4C1', '#00D49D', '#00D49D'];

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomColor = function randomColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var bubbleArray = void 0;
var bubble = void 0;
var circle1 = void 0;

var init = function init() {
  bubbleArray = [];
  for (var i = 0; i < 5; i++) {
    bubbleArray.push(new Bubbles(randomIntFromRange(20, canvas.width), 20, randomIntFromRange(-2, 2), randomIntFromRange(-2, 2), randomIntFromRange(20, 40), randomColor(colors)));
  }
  console.log(bubbleArray);
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbleArray.forEach(function (balls) {
    return balls.update(canvas, ctx);
  });
}

init();
animate();

// let animateInterval = setInterval(animate,30);

/***/ }),

/***/ "./src/bubbles.js":
/*!************************!*\
  !*** ./src/bubbles.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gravity = 1;
var friction = 0.99;

var maxRadius = 20;

var Ball = function () {
  function Ball(x, y, dx, dy, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      // c.strokeStyle = this.color;
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update(canvas, c) {
      if (this.y + this.radius + this.dy > canvas.height) {
        this.dy = -this.dy * friction;
      } else {
        this.dy += gravity;
      }
      if (this.x + this.radius + this.dx > canvas.height || this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw(c);
    }
  }]);

  return Ball;
}();

module.exports = Ball;

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FRAME_LIMIT = 2;

var Hero = function () {
  function Hero(canvas, ctx) {
    _classCallCheck(this, Hero);

    // this.lives = 3;
    this.width = 25;
    this.height = 37;
    // this.game = game;
    this.pos = (canvas.width / 2, canvas.heigth - this.height);
    this.frame = 0;
    this.leftMove = false;
    this.rightMove = false;
  }

  //   loseLife(){
  //     if (this.lives > 0) {
  //       this.lives-- ;
  //       this.game.reset();
  //   } else {
  //     this.game.gameOver();
  //   }
  // }


  _createClass(Hero, [{
    key: 'images',
    value: function images(source) {
      var img = new Image();
      img.src = source;
      return img;
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.moveRight) {
        this.pos[0] += 5;
        this.draw(this.images('/../assets/images/right1.gif'), this.width * this.frame);
      } else if (this.moveLeft) {
        this.pos[0] -= 5;
        this.draw(this.images('/../assets/images/left.gif'), this.width * this.frame);
      }
      this.frame = (this.frame + 1) % FRAME_LIMIT;
    }
  }, {
    key: 'draw',
    value: function draw(img, idx) {
      var ctx = this.game.context;
      ctx.drawImage(img, idx, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    }
  }]);

  return Hero;
}();

module.exports = Hero;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map