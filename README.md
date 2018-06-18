# Bubble-Shooter

[Live Demo](https://github.com/archhere)

### Background and Overview

 Bubble Shooter is a clone of the Puzzle Bobble arcade game that was released by Taito in 1994. The goal of the game is to clear the playing field by forming groups of three or more like-colored marbles. The game ends when the balls reach the bottom line of the screen. The more balls destroyed in one shot, the more points scored. A player wins when there are no balls remaining on the playing field.
 
### Functionality & MVP

In Bubble-Shooter, there will be :
 
 - [ ] A control modal describing the rules of the game
 - [ ] The user is given a specific colored bubble to shoot. Bubbles are removed only when a cluster of 3 of more bubbles are formed and the player's bubble matches the color of the cluster. 
 - [ ] New bubbles are generated and added to the existing bubbles.
 - [ ] If any of the bubbles reach the bottom, the game is over.
 
 ### Wireframes
 
 Bubble-shooter is a single screen app. The screen will contain a modal with the game rules and nav links to the Github, my LinkedIn.The player will target the bubbles with mouse movements and shoot with a mouse click. 
 
 ![](https://res.cloudinary.com/archhere/image/upload/v1529284039/Screen_Shot_2018-06-17_at_6.04.02_PM.png)
 
 ### Architecture and Technologies
 
 I will be using the below technologies

 * Vanilla JavaScript for overall structure and game logic,
 * HTML5 Canvas for DOM manipulation and rendering,
 * Webpack to bundle and serve up the various scripts.
 * Web Audio API for sound generation (while shooting the bubbles etc)

### Timeline
  
  #### Weekend:

 * Create the basic setup and draw the bubbles using canvas. Also research on creating clusters for the bubbles and collisions in JS. 
 * Try to create a grid setup for the game

  #### Day 1:

 * Apply basic styling to the background and user controls (including the modal to describe the functionality). 
 * Add motion to the bubbles and create clusters of 3 or more similar colors.


  #### Day 2:

 * Add mouse click event to the player's bubble as well as random generation of different colored bubbles for the user.
 * Make sure that the controls are smooth and the speed of the bubbles is a good pace. 
 * When the player shoots a cluster with a same colored bubble, the entire cluster should clear.


  #### Day 3:

 * Allow the user to accrue points for each bubble that gets cleared.
 * Build multiple levels.


  #### Day 4:

 * Style the app, making it polished and professional. 

 ### Bonus Features
 
 * Add a timer to the levels.
 * Add a variety of audio for each level.

