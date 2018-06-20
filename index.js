

const Bubbles = require("./src/bubbles.js");
import Hero from './src/hero.js';
import Arrow from './src/arrow.js';


const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let innerWidth = 800;
let innerHeight = 600;
canvas.width = innerWidth;
canvas.height = innerHeight;

let colors = [
  '#FF005D',
  '#0085B6',
  '#0BB4C1',
  '#00D49D',
  '#00D49D',
];




function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max-min+1) + min);
}

const randomColor = (arr) => (
  arr[Math.floor(Math.random() * arr.length)]
);


let bubbleArray;

export let hero;
let IsGameOver=false;

function loseLife(){
  if (hero.lives > 0) {
    hero.lives-- ;
} else {
  IsGameOver=true;
  // hero.lives = 3;
}
}

let splitballs;
export const arr = new Arrow();


const init = () => {
  bubbleArray = [];
  for(let i=0; i<1; i++) {
    bubbleArray.push(new Bubbles(
      randomIntFromRange(20,canvas.width-20),
      20,randomIntFromRange(-2,2),randomIntFromRange(-2,2),
      randomIntFromRange(5,8),randomColor(colors)));
  }
  hero = new Hero(canvas,ctx);
};

function getScore(c){
  c.font = "30px serif";
  c.fillStyle = "red";
  c.fillText(`SCORE: ${hero.points}` , 10 , 30);
}

function GameOver(c){
  c.font = "30px serif";
  c.fillStyle = "red";
  c.fillText(`Game Over! You scored ${hero.points}` , 300 , 300);
  c.fillText('Press space to continue', 300 , 400);
  addEventListener("keydown",  (e)=>(startGame(e)), false);
}




function startGame(e){
    if (e.keyCode === 13){
      hero.lives = 3;
      IsGameOver = false;


    }
}



function resetGame(c){
  c.font = "30px serif";
  c.fillStyle = "red";
  c.fillText('Game Over! Press enter to start a new game' , 100 , 100);
}


// function heroHit(c){
//   c.font = "20px serif";
//   c.fillStyle = "red";
//   c.fillText('You were hit!' , 100 , 100);
// }

let hit = false;

function animate(){
  console.log(IsGameOver);
  if (!IsGameOver){
    // if(!hit){
      requestAnimationFrame(animate);
    // }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    arr.draw(ctx);
    // bubbleArray.forEach(balls => balls.update(canvas,ctx,arr));
    bubbleArray.forEach((ball,idx)=>{
      if (ball.isHit){
        if (ball.splitToBalls() !== undefined) bubbleArray = bubbleArray.concat(ball.splitToBalls());
          bubbleArray.splice(idx,1);
        }
      if (hero.intersects(ball)){
        // hit = true;
        console.log("I was HIT");
        loseLife();
      }
      ball.update(canvas,ctx,arr);
    });
    // bubbleArray.forEach(balls => balls.update(canvas,ctx,arr));


    arr.update();
    hero.draw();
    getScore(ctx);
  }

  else{
    GameOver(ctx);
  }

}

init();
animate();












// let animateInterval = setInterval(animate,30);
