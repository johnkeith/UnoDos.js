$(document).ready(function(){
  var gameTimer = new Timer(2, 1000);
  
  gameTimer.start();
  
  var gameBoard = new Board();
  gameBoard.build_board();
  // insert test piece at 2,2
  gameBoard.board[2][2].contents = "O";
  gameBoard.board[1][2].contents = "D";
  gameBoard.board[3][2].contents = "S";

  debugger;
  // gameTimer.timerSpeed = 100;
  // gameTimer.reset();

  // draw function
  // update function
});
