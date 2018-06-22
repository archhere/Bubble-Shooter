import {arr} from '../index.js';

const FRAME_LIMIT = 2;

class Hero{
  constructor(canvas,ctx,points){

    this.lives = 3;
    this.width = 56;
    this.height = 55;
    this.hit = false;
    this.posX = canvas.width/2;
    this.posY = canvas.height-this.height;
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
    this.killed = new Audio('./assets/sounds/pain.wav');
  }

//
move(e){
  if(e.keyCode === 39) {
    if(this.posX<=770){
    this.posX += 10;
    this.framepic = 0;
    }
  }
  else if(e.keyCode === 37){
    if(this.posX>=0){
      this.posX-=10;
      this.framepic = 56;
    }

  }
}

shoot(e){
  console.log("keypress");
  if(e.keyCode === 32){
    arr.shoot(this.posX, this.posY);
    this.framepic = 111;
  }

}

draw(){
  this.ctx.drawImage(
    this.sprite,0,this.framepic,
    this.width,this.height,this.posX,
    this.posY,this.width,this.height);
}


hitByBubble(bubble) {
        let heroBox = this.width/2 - 20;
        let bubbleRadius = bubble.currentRadius;
        let horizontalDist = Math.abs(bubble.x - (this.posX + heroBox));
        let verticalDist = Math.abs(bubble.y - (this.posY + this.height / 2));

        if (horizontalDist > heroBox + bubbleRadius) {
          this.hit = false;
            return false;
        } else if (verticalDist > (this.height / 2) + bubbleRadius) {
            this.hit = false;
            return false;
        } else if (horizontalDist <= heroBox) {
            this.hit = true;
            return true;
        } else if (verticalDist <= this.height / 2) {
          this.hit = true;
            return true;
        }


        let dX = horizontalDist - heroBox;
        let dY = verticalDist - this.height / 2;

        if ((dX * dX) + (dY * dY) <= (bubbleRadius * bubbleRadius)) {
            this.hit = true;
            return true;
        } else {
            this.hit = false;
            return false;
        }
    }




}
export default Hero;
