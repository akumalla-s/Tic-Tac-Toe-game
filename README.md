# Tic-Tac-Toe-game
Implemented a Tic Tac Toe game using HTML, CSS and JavaScript

How to play this game?
1) “Start Game”, initializes the game, where the user can click on the button and thecurrent player's symbol (“X” or “O”) is displayed on the button.
2) Once the game is completed , the result is displayed
3) Game will be automatically reset once the game is completed or if the players want to abandon the game mid way use the reset button
4) Result of all the games will be displayed.

How to Run this code?

1) The index.html file has an API request that will call the app.js 
2) First we have to start the server using the command node app.js
3) Execute your index.html file (which has HTML, CSS and JavaScript) using liveserver or in your browser
4) History of results (ie. who won/ draw ) will be stored on the back-end server memory. (No database was used) , if the backend server restarts the history will be lost.

If you don't want to start the server and even if the server is offline you can still be able to play the game by just executing index.html file
But if you refresh the page the history will be lost unlike if you use server you can store the history and it appears even page reloads.
