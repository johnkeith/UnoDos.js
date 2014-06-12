$(document).ready(function(){
  var gameTimer = new Timer(2, 1000);
  
  gameTimer.start();
  
  var gameBoard = new Board();
  gameBoard.build_board();
  gameBoard.board_full();

  gameTimer.timerSpeed = 100;
  gameTimer.reset();

  // gameTimer = new Timer(5, 500);
  // draw function
  // update function
});
