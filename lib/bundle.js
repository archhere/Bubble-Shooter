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
exports.hero = exports.arr = undefined;

var _hero = __webpack_require__(/*! ./src/hero.js */ "./src/hero.js");

var _hero2 = _interopRequireDefault(_hero);

var _arrow = __webpack_require__(/*! ./src/arrow.js */ "./src/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bubbles = __webpack_require__(/*! ./src/bubbles.js */ "./src/bubbles.js");


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var won = false;
var innerWidth = 800;
var innerHeight = 600;
canvas.width = innerWidth;
canvas.height = innerHeight;
addEventListener("keydown", function (e) {
  return startGame(e);
}, false);
addEventListener("keydown", function (e) {
  return hero.move(e);
}, false);
addEventListener("keyup", function (e) {
  return hero.move(e);
}, false);
addEventListener("keypress", function (e) {
  return hero.shoot(e);
}, false);
// let pop = new Audio('./assets/sounds/pop.wav');

var colors = ['#FF005D', '#0085B6', '#0BB4C1', '#00D49D', '#00D49D'];

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomColor = function randomColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var bubbleArray = void 0;
var splitballs = void 0;
var arr = exports.arr = new _arrow2.default(canvas);
var hero = exports.hero = void 0;
var IsGameOver = false;
var backgrd = new Image();
var image = "./level1.jpg";
backgrd.src = image;

var init = function init() {
  bubbleArray = [];
  for (var i = 0; i < 1; i++) {
    console.log("created new bubbles");
    bubbleArray.push(new Bubbles(randomIntFromRange(20, canvas.width - 20), 20, randomIntFromRange(-2, 2), randomIntFromRange(-2, 2), randomIntFromRange(5, 8), randomColor(colors)));
  }
  console.log("bubbleaArray", bubbleArray);
};
exports.hero = hero = new _hero2.default(canvas, ctx, 0);

function heroLife() {
  var heartPos = canvas.width - 55;
  for (var i = 1; i <= hero.lives; i++) {
    ctx.drawImage(hero.lifeImg, heartPos, 10);
    heartPos -= 35;
  }
}

function getScore(c) {
  c.font = "30px serif";
  c.fillStyle = "#F45F4E";
  c.fillText('SCORE: ' + hero.points, 10, 30);
}

function GameOver(c) {
  c.font = "30px serif";
  c.fillStyle = "#F45F4E";
  c.fillText('You lost! You scored ' + hero.points, 300, 280);
  c.fillText('Press enter to play again', 300, 310);
}

function gameWon(c) {
  c.font = "30px serif";
  c.fillStyle = "#F45F4E";
  c.fillText('You won! Your score was ' + hero.points + '. Press enter to play again', 100, 300);
}

function loseLife() {
  if (hero.lives > 0) {
    hero.lives--;
    hero.hit = false;
  } else {
    IsGameOver = true;
  }
}

function startGame(e) {
  if (e.keyCode === 13) {
    if (won === true) {
      init();
      IsGameOver = false;
      won = false;
    } else {
      init();
      IsGameOver = false;
      exports.hero = hero = new _hero2.default(canvas, ctx, 0);
      exports.arr = arr = new _arrow2.default();
      animate();
    }
  }
}

function animate() {

  if (!IsGameOver) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgrd, 0, 0, 800, 600);
    arr.draw(ctx);
    for (var idx = 0; idx < bubbleArray.length; idx++) {
      if (bubbleArray[idx].isHit) {
        if (bubbleArray[idx].splitToBalls() !== undefined) {
          bubbleArray = bubbleArray.concat(bubbleArray[idx].splitToBalls());
        }
        bubbleArray.splice(idx, 1);
      }
      if (bubbleArray[idx] !== undefined) {
        bubbleArray[idx].update(canvas, ctx, arr);
        hero.hitByBubble(bubbleArray[idx]);
      }
      if (hero.hit) {
        loseLife();
        if (IsGameOver === false) init();
        break;
      }
    }

    if (bubbleArray.length === 0) {
      won = true;
      gameWon(ctx);
    }

    arr.update();
    hero.draw();
    getScore(ctx);
    heroLife();
  } else {
    GameOver(ctx);
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

// import UtilCollision from './util'

var Arrow = function () {
    function Arrow(canvas) {
        _classCallCheck(this, Arrow);

        this.x = 0;
        this.y = 600;
        this.liveArr = false;
        this.speed = 15;
        this.y_max = 0;
        this.shot = new Audio('./assets/sounds/arrow.wav');
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
            this.shot.pause();
            this.shot.currentTime = 0;
            this.shot.play();
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

        //    collidedWith(other){
        //        return Util(this, other);
        // }

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

var _hero = __webpack_require__(/*! ./hero.js */ "./src/hero.js");

var _hero2 = _interopRequireDefault(_hero);

var _arrow = __webpack_require__(/*! ./arrow.js */ "./src/arrow.js");

var _arrow2 = _interopRequireDefault(_arrow);

var _index = __webpack_require__(/*! ../index.js */ "./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//initialize

// let gravity = 0.2;
// let friction = 1;
var minRadius = 6;
var maxRadius = 20;
var maxdx = 8;
var maxdy = 8;

var Ball = function () {
  function Ball(x, y, dx, dy, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.splitCount = 1;
    this.isHit = false;
    this.currentRadius = this.radius * (5 - this.splitCount);
    this.gravity = 0.2;
    this.pop = new Audio('./assets/sounds/pop.wav');
  }

  _createClass(Ball, [{
    key: 'draw',
    value: function draw(c) {
      c.beginPath();
      c.arc(this.x, this.y, this.currentRadius, 0, 2 * Math.PI, false);
      // c.strokeStyle = this.color;
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: 'update',
    value: function update(canvas, c, arrow) {
      if (this.y + this.currentRadius + this.dy > canvas.height - 5) {
        this.dy = -this.dy;
        // this.dy = -this.dy * friction;
      } else {
        this.dy += this.gravity;
      }
      if (this.x + this.currentRadius + this.dx > canvas.width - 2 || this.x - this.currentRadius <= 0) {
        this.dx = -this.dx;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw(c);

      if (arrow.liveArr) {
        this.shotByArrow(arrow);
      }
    }
  }, {
    key: 'randomIntFromRange',
    value: function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: 'shotByArrow',
    value: function shotByArrow(arrow) {

      if (arrow !== undefined) {
        var xCollides = arrow.x >= this.x - this.currentRadius && arrow.x <= this.x + this.currentRadius;
        if (xCollides && this.y >= arrow.y) {
          _index.hero.points++;
          this.isHit = true;
          this.pop.play();
          arrow.liveArr = false;
        } else if (Math.sqrt((this.x - arrow.x) * (this.x - arrow.x) + (this.y - arrow.y) * (this.y - arrow.y)) <= this.currentRadius) {
          _index.hero.points++;
          this.isHit = true;
          this.pop.play();
          arrow.liveArr = false;
        }
      }
    }
  }, {
    key: 'splitToBalls',
    value: function splitToBalls() {
      if (this.splitCount > 1) {
        return;
      }

      var posX1 = void 0;
      var posX2 = void 0;

      if (this.x > 50 && this.x < 720) {
        posX1 = this.x - 50;
        posX2 = this.x + 50;
      } else {
        posX1 = this.x;
        posX2 = this.x;
      }

      var ball1 = new Ball(posX1, this.y + 3, this.randomIntFromRange(-2, 2), this.randomIntFromRange(-2, 2), this.radius, this.color);
      var ball2 = new Ball(posX2 + 50, this.y + 3, this.randomIntFromRange(-2, 2), this.randomIntFromRange(-2, 2), this.radius, this.color);

      ball1.splitCount = this.splitCount + 1;
      ball2.splitCount = this.splitCount + 1;
      this.isHit = false;
      ball1.currentRadius = this.radius * (5 - ball1.splitCount);
      ball2.currentRadius = this.radius * (5 - ball2.splitCount);
      return [ball1, ball2];
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
  function Hero(canvas, ctx, points) {
    _classCallCheck(this, Hero);

    this.lives = 3;
    this.width = 56;
    this.height = 55;
    this.hit = false;
    this.posX = canvas.width / 2;
    this.posY = canvas.height - this.height;
    this.frame = 0;
    this.leftMove = false;
    this.rightMove = false;
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "assets/images/player.png";
    this.framepic = 111;
    this.points = points;
    this.lifeImg = new Image();
    this.lifeImg.src = 'assets/images/heart1.png';
  }

  //


  _createClass(Hero, [{
    key: 'move',
    value: function move(e) {
      if (e.keyCode === 39) {
        if (this.posX <= 770) {
          this.posX += 10;
          this.framepic = 0;
        }
      } else if (e.keyCode === 37) {
        if (this.posX >= 0) {
          this.posX -= 10;
          this.framepic = 56;
        }
      }
    }
  }, {
    key: 'shoot',
    value: function shoot(e) {
      console.log("keypress");
      if (e.keyCode === 32) {
        _index.arr.shoot(this.posX, this.posY);
        this.framepic = 111;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.ctx.drawImage(this.sprite, 0, this.framepic, this.width, this.height, this.posX, this.posY, this.width, this.height);
    }
  }, {
    key: 'hitByBubble',
    value: function hitByBubble(bubble) {
      var heroBox = this.width / 2 - 20;
      var bubbleRadius = bubble.currentRadius;
      var horizontalDist = Math.abs(bubble.x - (this.posX + heroBox));
      var verticalDist = Math.abs(bubble.y - (this.posY + this.height / 2));

      if (horizontalDist > heroBox + bubbleRadius) {
        this.hit = false;
        return false;
      } else if (verticalDist > this.height / 2 + bubbleRadius) {
        this.hit = false;
        return false;
      } else if (horizontalDist <= heroBox) {
        this.hit = true;
        return true;
      } else if (verticalDist <= this.height / 2) {
        this.hit = true;
        return true;
      }

      var dX = horizontalDist - heroBox;
      var dY = verticalDist - this.height / 2;

      if (dX * dX + dY * dY <= bubbleRadius * bubbleRadius) {
        this.hit = true;
        return true;
      } else {
        this.hit = false;
        return false;
      }
    }
  }]);

  return Hero;
}();

exports.default = Hero;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map