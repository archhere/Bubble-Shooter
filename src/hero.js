import {arr} from '../index.js';
// import UtilCollision from './util';


const FRAME_LIMIT = 2;

class Hero{
  constructor(canvas,ctx){

    this.lives = 1;
    this.width = 56;
    this.height = 47;
    // this.game = game;
    this.hit = false;
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
    this.points = 0;



    document.addEventListener("keydown", (e)=>(this.move(e)), false);
    document.addEventListener("keyup", (e)=>(this.move(e)), false);
    document.addEventListener("keypress", (e)=>(this.shoot(e)), false);

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


move(e){
  if(e.keyCode === 39) {
    if(this.posX<=770){
    this.posX += 5;
    this.framepic = 0;
    }
  }
  else if(e.keyCode === 37){
    if(this.posX>=0){
      this.posX-=5;
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


intersects(ball) {
        let boundingBoxHalf = this.width/2 - 20;
        let ballR = ball.currentRadius;
        let horizontalDist = Math.abs(ball.x - (this.posX + boundingBoxHalf));
        let verticalDist = Math.abs(ball.y - (this.posY + this.height / 2));

        if (horizontalDist > boundingBoxHalf + ballR) {
            return false;
        } else if (verticalDist > (this.height / 2) + ballR) {
            return false;
        }

        if (horizontalDist <= boundingBoxHalf) {
            return true;
        } else if (verticalDist <= this.height / 2) {
            return true;
        }


        let dX = horizontalDist - boundingBoxHalf;
        let dY = verticalDist - this.height / 2;

        if (dX * dX + dY * dY <= (ballR * ballR)) {
            return true;
        } else {
            return false;
        }
    }




}
export default Hero;
