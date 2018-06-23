# Bubble Shooter - a shooting game in which you need to shoot toxic bubbles to survive

[Live Demo](https://archhere.github.io/Bubble-Shooter/)

### Background and Overview

 Bubble Shooter is a clone of the Bubble Struggle arcade game.The player controls Travis, a scientist whose experiments go wrong as he becomes trapped in a Bubble world. The goal of the game is to clear the incoming bubble assault. The more bubbles destroyed, the more points scored. A player wins when there are no bubbles remaining on the playing field. The character gets 3 lives and loses a life everytime a bubble hits him.
 
### Game features

There are 3 levels to the game. If the player wins, he moves on to the next level. If he loses, he starts from the beginning. Each level has increasing number of bubbles.
 
                                                       Level 1
 
 ![](assets/images/level1screen.png)
 
 ### Player Life
 
 The player starts each level with 3 lives. Every time a bubble touches him, he loses a life. I used a simple heart image to indicate the current life status of the player.
 
 ### Gravity
 
 I generated the effect of the bubbles falling, by adding a velocity (represented by dx,dy) and then adding gravity to create the effect of the bubble picking up speed as it falls down.
 
 ```javascript
 update(canvas,c,arrow){
    if(this.y+this.currentRadius+this.dy > canvas.height-5){
      this.dy = -this.dy;
    } else {
      this.dy += this.gravity;
    }
    if(this.x + this.currentRadius + this.dx > canvas.width-5 || this.x - this.currentRadius <= 0){
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw(c);
    etc..
  ```
 ### Collision detection
 
 I implemented collision detection in 2 places - when the bubble is hit by arrow  - when the user is hit by bubble
 For bubble and arrow, I implemented collision detection algorithm between rectangle and circle. For bubble and player, I created a box around the player and implemented collision detection algorithm between rectangle and circle.

 ### Splitting the bubbles
 
 The bubbles split into 2 smaller bubbles when they are shot at. Each bubble splits into smaller bubbles upto 2 times.
 
 ### Bonus Features
 
 * Add a pause button
 * Add a background music to the game.
 * Add more levels.

