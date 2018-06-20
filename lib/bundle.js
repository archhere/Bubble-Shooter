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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arr = undefined;

var _hero = __webpack_require__(/*! ./src/hero.js */ "./src/hero.js");

var _hero2 = _interopRequireDefault(_hero);

var _arrow = __webpack_require__(/*! ./src/arrow.js */ "./src/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bubbles = __webpack_require__(/*! ./src/bubbles.js */ "./src/bubbles.js");


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
var hero = void 0;
var IsGameOver = false;
var arr = exports.arr = new _arrow2.default();

var init = function init() {
  bubbleArray = [];
  for (var i = 0; i < 5; i++) {
    bubbleArray.push(new Bubbles(randomIntFromRange(20, canvas.width), 20, randomIntFromRange(-2, 2), randomIntFromRange(-2, 2), randomIntFromRange(20, 40), randomColor(colors)));
  }
  hero = new _hero2.default(canvas, ctx);
};

function animate() {

  if (!IsGameOver) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbleArray.forEach(function (balls) {
      return balls.update(canvas, ctx);
    });
    arr.draw(ctx);
    arr.update();
    hero.draw();
  }
}

init();
animate();

// let animateInterval = setInterval(animate,30);

/***/ }),

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arrow = function () {
    function Arrow() {
        _classCallCheck(this, Arrow);

        this.x = 0;
        this.y = 600;
        this.liveArr = false;
        this.speed = 15;
        this.y_max = 0;
    }

    // getX(){
    //     return this.x;
    // }
    // getY(){
    //     return this.y;
    // }

    _createClass(Arrow, [{
        key: "shoot",
        value: function shoot(x, y) {
            this.x = x + 25;
            this.y = y;
            this.liveArr = true;
        }
    }, {
        key: "update",
        value: function update() {
            if (!this.liveArr) {
                return;
            }

            this.y -= this.speed;
            if (this.y < this.y_max) {
                this.liveArr = false;
                this.y = 600;
                this.x = 600;
            }
        }
    }, {
        key: "draw",
        value: function draw(ctx) {
            if (!this.liveArr) return;

            // console.log(this.x+" "+this.y);
            ctx.save();
            ctx.strokeStyle = "white";

            ctx.beginPath();
            ctx.moveTo(this.x, 600);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.restore();
        }
    }]);

    return Arrow;
}();

exports.default = Arrow;

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
      if (this.x + this.radius + this.dx + 1 > canvas.height || this.x - this.radius - 1 <= 0) {
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../index.js */ "./index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FRAME_LIMIT = 2;

var Hero = function () {
  function Hero(canvas, ctx) {
    var _this = this;

    _classCallCheck(this, Hero);

    // this.lives = 3;
    this.width = 56;
    this.height = 47;
    // this.game = game;
    this.posX = 400;
    this.posY = 544;
    this.frame = 0;
    this.leftMove = false;
    this.rightMove = false;
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "player.png";
    this.img = "../assets/images/player.png";
    this.framepic = 111;

    // this.img = new Image();
    // this.img.src = "/../assets/player.png";
    document.addEventListener("keydown", function (e) {
      return _this.move(e);
    }, false);
    document.addEventListener("keyup", function (e) {
      return _this.move(e);
    }, false);
    document.addEventListener("keypress", function (e) {
      return _this.shoot(e);
    }, false);

    // document.addEventListener("keydown", this.keyDownHandler, false);
    // document.addEventListener("keyup", this.keyUpHandler, false);
    // setInterval(()=>(this.move()),500);
    // this.isShooting = false;
    // this.isHit = false;
    // this.keyDownHandler = this.keyDownHandler.bind(this)

  }

  //   loseLife(){
  //     if (this.lives > 0) {
  //       this.lives-- ;
  //       this.game.reset();
  //   } else {
  //     this.game.gameOver();
  //   }
  // }
  // images(source){
  //   let img = new Image();
  //   img.src = source;
  //   // return img;
  // }

  //
  // keyDownHandler(e){
  //   if(e.keyCode === 39) {
  //     this.rightMove = true;
  //
  //   }
  //   else if(e.keyCode === 37) {
  //     this.leftMove = true;
  //   }
  // }
  //
  // keyUpHandler(e){
  //   if(e.keyCode === 39) {
  //     this.rightMove = false;
  //   }
  //   else if(e.keyCode === 37) {
  //     this.leftMove = false;
  //   }
  // }


  _createClass(Hero, [{
    key: "move",
    value: function move(e) {
      if (e.keyCode === 39) {
        if (this.posX <= 770) {
          this.posX += 5;
          this.framepic = 0;
        }
      } else if (e.keyCode === 37) {
        if (this.posX >= 0) {
          this.posX -= 5;
          this.framepic = 56;
        }
      }
    }
  }, {
    key: "shoot",
    value: function shoot(e) {
      console.log("keypress");
      if (e.keyCode === 32) {
        _index.arr.shoot(this.posX, this.posY);
        this.framepic = 111;
      }
    }

    // move(){
    //   // console.log("move" ,this)
    //   if (this.rightMove){
    //
    //     this.posX++;
    //     // this.draw(this.images('/../assets/images/right1.gif'),this.width*this.frame);
    //   } else if (this.leftMove){
    //     this.posY--;
    //     // this.draw(this.images('/../assets/images/left.gif'),this.width*this.frame);
    //   }
    //   // this.frame = (this.frame + 1) % FRAME_LIMIT;
    // }


  }, {
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.sprite, 0, this.framepic, this.width, this.height, this.posX, this.posY, this.width, this.height);
      // this.ctx.drawImage(
      //   this.sprite,
      //   this.frame * this.width / this.numberOfFrames,
      //   ,0,this.width,this.height,this.posX,this.posY,this.width,this.height);
    }
  }, {
    key: "doesCollideWith",
    value: function doesCollideWith(bubble) {
      for (var i = this.posX; i < this.height + this.posX; i++) {
        if (bubble.checkEdgeCollision(i, this.posY)) {
          return true;
        }
      }

      for (var _i = this.posY; _i < this.posY + this.height; _i++) {
        if (bubble.checkEdgeCollision(this.posX, _i) || bubble.checkEdgeCollision(this.posX + this.width, _i)) {
          return true;
        }
      }
    }
  }]);

  return Hero;
}();

exports.default = Hero;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map