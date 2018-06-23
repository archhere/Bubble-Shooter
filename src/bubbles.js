import Hero from './hero.js';
import Arrow from './arrow.js';
import {hero} from '../index.js';


//initialize

// let gravity = 0.2;
// let friction = 1;
let minRadius = 6;
let maxRadius = 20;
let maxdx = 8;
let maxdy = 8;

function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max-min+1) + min);
}



class Ball{
  constructor(x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.mindx = 0;
    this.radius = radius;
    this.color = color;
    this.splitCount = 1;
    this.isHit = false;
    this.currentRadius = this.radius*(5-this.splitCount);
    this.gravity = 0.2;
    this.pop = new Audio('./assets/sounds/pop.wav');
  }

  draw(c){
    c.beginPath();
    c.arc(this.x,this.y,this.currentRadius,0,2 * Math.PI,false);
    // c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }
  update(canvas,c,arrow){
    if(this.y+this.currentRadius+this.dy > canvas.height-5){
      this.dy = -this.dy;
    } else {
      this.dy += this.gravity;
    }
    if(this.x + this.currentRadius + this.dx > canvas.width || this.x <= 0){
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw(c);

    if(arrow.liveArr){
      this.shotByArrow(arrow);
    }

  }

  randomIntFromRange(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
  }


shotByArrow(arrow) {

      if (arrow !== undefined) {
          let xCollides = (arrow.x >= this.x - this.currentRadius && arrow.x <= this.x + this.currentRadius);
          if (xCollides && (this.y >= arrow.y))
          {
              hero.points++;
              this.isHit = true;
              this.pop.pause();
              this.pop.currentTime = 0;
              this.pop.play();
              arrow.liveArr=false;
          }
          else if (Math.sqrt((this.x - arrow.x) * (this.x - arrow.x) +
                  (this.y - arrow.y) * (this.y - arrow.y )
              ) <= this.currentRadius
          ) {
              hero.points++;
              this.isHit = true;
              this.pop.pause();
              this.pop.currentTime = 0;
              this.pop.play();
              arrow.liveArr=false;
          }
      }
  }

  splitToBalls(){
    if (this.splitCount > 2) {
      return;
    }

    let posX1;
    let posX2;

    if (this.x > 50 && this.x < 690){
        posX1 = this.x - 50;
        posX2 = this.x + 50;
    } else if (this.x >= 690){
      posX1 = 760;
      posX2 = 740;
    } else if (this.x <= 50){
      posX1 = 60;
      posX2 = 40;
    }

    let du = randomIntFromRange(-2,2);
    let dv = randomIntFromRange(0,2);

    let ball1 = new Ball(posX1, this.y + 40,du,dv,this.radius,this.color);
    let ball2 = new Ball(posX2 + 50, this.y + 20,du,dv,this.radius,this.color);

    ball1.splitCount=this.splitCount+1;
    ball2.splitCount=this.splitCount+1;
    this.isHit = false;
    ball1.currentRadius = this.radius*(5-ball1.splitCount);
    ball2.currentRadius = this.radius*(5-ball2.splitCount);
    ball1.posX1 = ball1.posX1 + 3*ball1.currentRadius;
    ball2.posX2 = ball2.posX2 + 3*ball2.currentRadius;
    if (hero.hit === false){
      if (du <= 0 && posX1<=750){
        du = 1;
      } else if (du >= 0 && posX1 > 750) {
        du = -1;
      } else if (du <= 0 && posX2<=750) {
        du = 3.2;
      } else if (du >= 0 && posX2 > 750){
        du = -3.6;
      } else du = randomIntFromRange(-2,2);
    }
    ball1.du = du;
    ball2.du = du;
    console.log(posX1);
    console.log(posX2);
    console.log(this.y-3);
    console.log(du);
    console.log(dv);
    return [ball1,ball2];
  }

}



module.exports = Ball;
