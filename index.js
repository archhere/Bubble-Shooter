

const Bubbles = require("./src/bubbles.js");
import Hero from './src/hero.js';
import Arrow from './src/arrow.js';

// canvas dimensions

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let won = false;
let innerWidth = 800;
let innerHeight = 600;
// let innerHeight = screen.height-550;


canvas.width = innerWidth;
canvas.height = innerHeight;
addEventListener("keydown",  (e)=>(startGame(e)), false);
addEventListener("keydown", (e)=>(hero.move(e)), false);
addEventListener("keyup", (e)=>(hero.move(e)), false);
addEventListener("keypress", (e)=>(hero.shoot(e)), false);
let gamemusic = new Audio('./assets/sounds/music.mp3');

let colors = [
  '#FF005D',
  '#0085B6',
  '#0BB4C1',
  '#00D49D',
  '#00D49D',
];


// util functions to generate random colors and numbers

function randomIntFromRange(min,max){
  return Math.floor(Math.random() * (max-min+1) + min);
}

const randomColor = (arr) => (
  arr[Math.floor(Math.random() * arr.length)]
);


// initialize

let bubbleArray;
let splitballs;
export let arr = new Arrow(canvas);
export let hero;
let IsGameOver=false;
let finalGameOver = false;
let GamePaused = false;
let backgrd = new Image();
let images = ['./assets/images/level1.jpg',
'./assets/images/level2.jpg','./assets/images/level3.jpg','./assets/images/level4.png'];
let levels = {
  currentLevel: 1,
  countofbubbles: 1,
  bkgrimg: images[0]
};
backgrd.src = levels.bkgrimg;
console.log(levels.currentLevel);
const init = (level) => {
  let ranges = [-2.0,-2.1,-2.2,-2.3,-2.4,-2.5,-2.6,-2.7,-2.8,-2.9,
    -1.0,-1.1,-1.2,-1.3,-1.4,-1.5,-1.6,-1.7,-1.8,-1.9,2.0,2.1,2.2,
    2.3,2.4,2.5,2.6,2.7,2.8,2.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9];
  console.log("init");
  console.log(level.currentLevel);
  document.body.classList.add("test");
  bubbleArray = [];
  for(let i=0; i < level.countofbubbles; i++) {
    console.log("created new bubbles");
    let dx = randomIntFromRange(-2,2);
    let dy = randomIntFromRange(-2,2);
    let radius = randomIntFromRange(5,8);
    let x = randomIntFromRange(10+radius,canvas.width-50);
    if (hero.hit === false){
      if (dx === 0){
        console.log("true its 0");
        dx = ranges[Math.floor(Math.random() * ranges.length)];
      }
    }
    console.log('vel',dx);
    bubbleArray.push(new Bubbles(
      x,40,dx,dy,radius,randomColor(colors)));
  }
  console.log("new bubbles list",bubbleArray);
};
hero = new Hero(canvas,ctx,0);



// functions to control the game

function heroLife(){
let heartPos = canvas.width-55;
for (let i = 1; i <= hero.lives; i++) {
    ctx.drawImage(hero.lifeImg,heartPos, 10);
    heartPos -= 35;
  }
}

function getScore(c){
  c.font = "30px 'Roboto'";
  if (levels.currentLevel === 1) c.fillStyle = "#F45F4E";
  else c.fillStyle = "red";
  c.fillText(`SCORE: ${hero.points}` , 10 , 30);
}

function updateLevel(c){
  c.font = "30px 'Roboto'";
  if (levels.currentLevel === 1) c.fillStyle = "#F45F4E";
  else c.fillStyle = "red";
  c.fillText(`LEVEL: ${levels.currentLevel}` , 350 , 30);
}

function GameOver(c){
  c.font = "30px Roboto";
  if (levels.currentLevel === 1) c.fillStyle = "#F45F4E";
  else c.fillStyle = "red";
  c.fillText(`You lost! You scored ${hero.points}` , 280 , 280);
  c.fillText('Press enter to play again', 280 , 310);
}

function gameWon(c){
    c.font = "30px Roboto";
    if (levels.currentLevel === 1) c.fillStyle = "#F45F4E";
    else c.fillStyle = "red";
    c.fillText(`You won! Your score was ${hero.points}.` , 210 , 280);
    c.fillText('Press enter to go to the next level.' , 210 , 310);
  }

function gameOverfinal(c){
  c.font = "30px Roboto";
  if (levels.currentLevel === 1) c.fillStyle = "#F45F4E";
  else c.fillStyle = "red";
  c.fillText(`You won! Your score was ${hero.points}.` , 210 , 280);
  c.fillText('You have completed all the levels.' , 210 , 310);
  c.fillText('Press enter if you want to play again.' , 210 , 340);
}

function loseLife(){
    if (hero.lives > 1) {
      hero.lives-- ;
      hero.hit = false;
    } else {
    hero.lives-- ;
    IsGameOver=true;
    }
}


function startGame(e){
    if (e.keyCode === 13 && (IsGameOver === true || won === true || finalGameOver === true)){
      if(won===true && finalGameOver === false){
        won = false;
        levels.countofbubbles++;
        levels.currentLevel++;
        let currentIdx = images.indexOf(levels.bkgrimg);
        levels.bkgrimg = images[currentIdx+1];
        console.log("bkgr change",levels.bkgrimg);
        backgrd.src = levels.bkgrimg;
        init(levels);
        IsGameOver = false;
        let temp = hero.points;
        hero = new Hero(canvas,ctx,temp);
        console.log("reaches here");
      }
      else if(finalGameOver) {
        console.log("calledfinal");
        levels.currentLevel = 1;
        levels.countofbubbles = 1;
        levels.bkgrimg = images[0];
        backgrd.src = levels.bkgrimg;
        init(levels);
        won = false;
        IsGameOver = false;
        finalGameOver = false;
        hero = new Hero(canvas,ctx,0);
      }
      else {
        console.log("called");
        levels.currentLevel = 1;
        levels.countofbubbles = 1;
        levels.bkgrimg = images[0];
        backgrd.src = levels.bkgrimg;
        init(levels);
        IsGameOver = false;
        hero = new Hero(canvas,ctx,0);
        arr = new Arrow();
        console.log("start from beginning");
        animate();
      }

      }
}


// Game loop

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
          hero.killed.pause();
          hero.killed.currentTime = 0;
          hero.killed.play();
          loseLife();
          if (IsGameOver === false) init(levels);
          break;
        }
      }

      if (bubbleArray.length === 0){
        if (levels.currentLevel === 4) {
          finalGameOver = true;
          gameOverfinal(ctx);
        } else {
          won = true;
          gameWon(ctx);
          }
        }
    arr.update();
    // setTimeout(()=>(gamemusic.play()),500);
    hero.draw();
    getScore(ctx);
    updateLevel(ctx);
    heroLife();

  }

  else{
    GameOver(ctx);
  }
}
init(levels);
animate();
