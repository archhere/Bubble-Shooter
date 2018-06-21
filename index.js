

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
let images = ['./level1.jpg','./level2.jpg','./level3.jpg'];
let levels = {
  currentLevel: 1,
  countofbubbles: 1,
  bkgrimg: images[0]
};
let currentLevel = 1;
let image = "./level1.jpg";
backgrd.src = image;



// function levels(currentlevel){
//   switch (currentlevel) {
//     case 1:
//       image = "./level1.jpg";
//       break;
//     case 2:
//       image = './level2.jpg';
//       break;
//     case 3:
//       image = './level3.jpg';
//       break;
//     default:
//       image = "./level1.jpg";
//       break;
//   }
// }

function gameWon(c){
    c.font = "30px serif";
    c.fillStyle = "red";
    c.fillText('You won! Press enter to go to the next level' , 100 , 100);
    addEventListener("keydown",  (e)=>(startGame(e)), false);
  }


// function gotolevels(e){
//     if (e.keyCode === 13){
//       hero.lives = 3;
//       currentLevel++;
//       hero = new Hero(canvas,ctx);
//       levels(currentLevel);
//       init();
//       arr = new Arrow();
//       animate();
//     }
// }

const init = (Level) => {
  bubbleArray = [];
  for(let i=0; i < Level.countofbubbles; i++) {
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
  c.fillText(`Game Over! You scored ${hero.points}` , 300 , 300);
  c.fillText('Press enter to play again', 300 , 400);
}

addEventListener("keydown",  (e)=>(startGame(e)), false);

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
      if (won === false) {
        levels.currentLevel = 1;
        levels.countofbubbles = 1;
        init(levels);
        IsGameOver = false;
        hero = new Hero(canvas,ctx,0);
        arr = new Arrow();
        animate();

      }
      else {
        won = false;
        levels.currentLevel++;
        levels.countofbubbles++;
        // init(levels);
        IsGameOver = false;
        let temp = hero.points;
        hero.document.removeEventListener("keydown", false);
        hero.document.removeEventListener("keyup", false);
        hero.document.removeEventListener("keypress", false);
        hero = new Hero(canvas,ctx,temp);
        arr = new Arrow();
        animate();
      }

    }
}


// function resetGame(c){
//   c.font = "30px serif";
//   c.fillStyle = "red";
//   c.fillText('Game Over! Press enter to start a new game' , 100 , 100);
// }


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
          if (IsGameOver === false) init(levels);
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

init(levels);
animate();












// let animateInterval = setInterval(animate,30);
