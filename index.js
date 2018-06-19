

const Bubbles = require("./src/bubbles.js");
const Hero = require('./src/hero.js');


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
let bubble;
let circle1;


const init = () => {
  bubbleArray = [];
  for(let i=0; i<5; i++) {
    bubbleArray.push(new Bubbles(randomIntFromRange(20,canvas.width),20,randomIntFromRange(-2,2),randomIntFromRange(-2,2),randomIntFromRange(20,40),randomColor(colors)))
  }
  console.log(bubbleArray);
};



function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bubbleArray.forEach(balls => balls.update(canvas,ctx));
}

init();
animate();

// let animateInterval = setInterval(animate,30);
