import {arr} from '../index.js';



const FRAME_LIMIT = 2;

class Hero{
  constructor(canvas,ctx){

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



draw(){
  this.ctx.drawImage(this.sprite,0,this.framepic,this.width,this.height,this.posX,this.posY,this.width,this.height);
  // this.ctx.drawImage(
  //   this.sprite,
  //   this.frame * this.width / this.numberOfFrames,
  //   ,0,this.width,this.height,this.posX,this.posY,this.width,this.height);
}

doesCollideWith(bubble){
  for(let i = this.posX; i < (this.height + this.posX); i++) {
    if (bubble.checkEdgeCollision(i, this.posY)) {
      return true;
  }
}

for (let i = this.posY; i < this.posY + this.height; i++) {
  if (bubble.checkEdgeCollision(this.posX, i) || bubble.checkEdgeCollision(this.posX + this.width, i)) {
        return true;
      }
    }
  }
}
export default Hero;
