import Hero from './hero.js';
const Bubbles = require("./bubbles.js");

let IsGameOver=false;
function start() {

    if(!IsGameOver && !victory) {
        update();
    }
    render();

    requestAnimationFrame(start);
    score();

}


let hero = new Hero();
let bubble = new Bubbles;
let bub = [];
bubble.push(bub);
let harpoon = new Harpoon;
let gameContinue = false;
let victory = false;
let points = 0;
start();
