
let gravity = 1;
let friction = 0.99;

let maxRadius = 20;

class Ball{
  constructor(x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw(c){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,2 * Math.PI,false);
    // c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }
  update(canvas,c){
    if(this.y+this.radius+this.dy > canvas.height){
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }
    if(this.x + this.radius + this.dx+1 > canvas.height || this.x - this.radius-1 <= 0){
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw(c);
  }
}

module.exports = Ball;
