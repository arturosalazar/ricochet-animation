# ricochet-animation
Animation of two balls that bounce off of each other and the walls

# Directions
The animation will begin automaticaally after you open the program

Two balls are generated which will bounce off of each other and the sides of the p5 canvas

The canvas will also cause the balls to only bounch to the right of the x value of your mouse and 
below the y value of the mouse. This creates an invisible "box" that you can use to make the balls bounce in a smaller area

Left clicking your mouse will cause the balls to change direction

# Known Bugs
The balls will sometimes vibrate against each other if they hit at just the right angle. This happens intermittently as the balls bounce around the canvas. 

If you move your mouse cursor such that the mouse is below a ball or to the right of a ball, the ball will vibrate and move erratically. The reason is that the ball is trying to act as if it's bounced off of the "invisible" wall created by the mouse, but it cannot move past this wall. The solution is to move your mouse above and to the left of the ball. You may need to left click your mouse to get the balls working correctly
