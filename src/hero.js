const FRAME_LIMIT = 2;

class Hero{
  constructor(canvas,ctx){

    // this.lives = 3;
    this.width = 25;
    this.height = 37;
    // this.game = game;
    this.pos = (canvas.width/2,canvas.heigth-this.height);
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
images(source){
  let img = new Image();
  img.src = source;
  return img;
}


move(){
  if (this.moveRight){
    this.pos[0] +=5;
    this.draw(this.images('/../assets/images/right1.gif'),this.width*this.frame);
  } else if (this.moveLeft){
    this.pos[0] -=5;
    this.draw(this.images('/../assets/images/left.gif'),this.width*this.frame);
  }
  this.frame = (this.frame + 1) % FRAME_LIMIT;
}

draw(img,idx){
  let ctx = this.game.context;
  ctx.drawImage(img,idx,0,this.width,this.height,this.pos[0],this.pos[1],this.width,this.height);
}
}

module.exports = Hero;
