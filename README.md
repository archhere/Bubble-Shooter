# Bubble Shooter

[Live Demo](https://github.com/archhere)

### Background and Overview

 Bubble Shooter is a clone of the Bubble Struggle arcade game.The player controls Travis, a scientist whose experiments go wrong as he becomes trapped in a Bubble world. The goal of the game is to clear the incoming bubble assault. The more bubbles destroyed, the more points scored. A player wins when there are no bubbles remaining on the playing field. The character gets 3 lifes and loses a life everytime a bubble hits him.
 
### Functionality & MVP

In Bubble-Shooter, there will be :
 
 - [ ] A control modal describing the rules of the game
 - [ ] The user is given a specific weapon to shoot. 
 - [ ] Bubbles explode when shot
 - [ ] The player loses a life if any bubble drops down on him.
 
 ### Wireframes
 
 Bubble-shooter is a single screen app. The screen will contain a modal with the game rules and nav links to the Github, my LinkedIn.The player can move left and right to shoot the bubbles. 
  
![](https://res.cloudinary.com/archhere/image/upload/v1529388733/Untitled_Diagram.jpg)
 

 
 
 ### Architecture and Technologies
 
 I will be using the below technologies

 * Vanilla JavaScript for overall structure and game logic,
 * HTML5 Canvas for DOM manipulation and rendering,
 * Webpack to bundle and serve up the various scripts.
 * Web Audio API for sound generation (while shooting the bubbles etc)

### Timeline
  
  #### Weekend:

 * Create the basic setup and generate sprites using canvas. Do some research on collisions,sprite creation, animation and explosions (popping action of the bubble) in JS. 
 * Try to create a grid setup for the game

  #### Day 1:

 * Apply basic styling to the background and user controls (including the modal to describe the functionality). 
 * Add motion to the bubbles and collision  animation.
 * Make sure that the controls are smooth and the bubbles fall down in a managable pace. 

  #### Day 2:

 * Add keyboard movements to control the players action.
 * When the player shoots a bubble, it should pop.


  #### Day 3:

 * Allow the user to accrue points for each bubble that gets cleared.
 * Build multiple levels by increasing the number of bubbles, how fast they come down or even add other objects like fruits or bugs.


  #### Day 4:

 * Style the app, making it polished and professional. 

 ### Bonus Features
 
 * Add a timer to the levels.
 * Add a variety of audio for each level.
 * Add a different background for each level - Underwater, space etc.

