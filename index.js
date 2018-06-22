

const Bubbles = require("./src/bubbles.js");
import Hero from './src/hero.js';
import Arrow from './src/arrow.js';


const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let won = false;
let innerWidth = 800;
let innerHeight = 600;
canvas.width = innerWidth;
canvas.height = innerHeight;
addEventListener("keydown",  (e)=>(startGame(e)), false);
addEventListener("keydown", (e)=>(hero.move(e)), false);
addEventListener("keyup", (e)=>(hero.move(e)), false);
addEventListener("keypress", (e)=>(hero.shoot(e)), false);

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
let splitballs;
export let arr = new Arrow(canvas);
export let hero;
let IsGameOver=false;
let backgrd = new Image();
let image = "./level1.jpg";
backgrd.src = image;

const init = () => {
  bubbleArray = [];
  for(let i=0; i < 1; i++) {
    console.log("created new bubbles");
    bubbleArray.push(new Bubbles(
      randomIntFromRange(20,canvas.width-20),
      20,randomIntFromRange(-2,2),randomIntFromRange(-2,2),
      randomIntFromRange(5,8),randomColor(colors)));
  }
  console.log("bubbleaArray",bubbleArray);
};
hero = new Hero(canvas,ctx,0);

function heroLife(){
let heartPos = canvas.width-55;
for (let i = 1; i <= hero.lives; i++) {
    ctx.drawImage(hero.lifeImg,heartPos, 10);
    heartPos -= 35;
  }
}

function getScore(c){
  c.font = "30px serif";
  c.fillStyle = "red";
  c.fillText(`SCORE: ${hero.points}` , 10 , 30);
}

function GameOver(c){
  c.font = "30px serif";
  c.fillStyle = "red";
  c.fillText(`You lost! You scored ${hero.points}` , 100 , 300);
  c.fillText('Press enter to play again', 300 , 400);
}

function gameWon(c){
    c.font = "30px serif";
    c.fillStyle = "red";
    c.fillText(`You won! Your score was ${hero.points}. Press enter to play again` , 100 , 300);
  }



function loseLife(){
    if (hero.lives > 0) {
      hero.lives-- ;
      hero.hit = false;
    } else {
    IsGameOver=true;
    }
}

function startGame(e){
    if (e.keyCode === 13){
      if(won===true){
        init();
        IsGameOver = false;
        won = false;
      }
      else {
        init();
        IsGameOver = false;
        hero = new Hero(canvas,ctx,0);
        arr = new Arrow();
        animate();
      }

      }
}

function animate(){

  if (!IsGameOver){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(backgrd,0,0,800,600);
    arr.draw(ctx);
      for (let idx = 0; idx < bubbleArray.length; idx++) {
        if (bubbleArray[idx].isHit){
          if (bubbleArray[idx].splitToBalls() !== undefined){
            bubbleArray = bubbleArray.concat(bubbleArray[idx].splitToBalls());
          }
          bubbleArray.splice(idx,1);
        }
        if (bubbleArray[idx] !== undefined){
          bubbleArray[idx].update(canvas,ctx,arr);
          hero.hitByBubble(bubbleArray[idx]);
        }
        if(hero.hit){
          loseLife();
          if (IsGameOver === false) init();
          break;
        }
      }

      if (bubbleArray.length === 0){
        won = true;
        gameWon(ctx);
        }

    arr.update();
    hero.draw();
    getScore(ctx);
    heroLife();

  }

  else{
    GameOver(ctx);
  }
}
init();
animate();












// let animateInterval = setInterval(animate,30);
