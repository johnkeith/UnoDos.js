$(document).ready(function(){
  var gameTimer = new Timer(2, 1000);
  
  gameTimer.start();
  
  var gameBoard = new Board();
  gameBoard.build_board();
  console.log(gameBoard.board_full());

  // gameTimer.timerSpeed = 100;
  // gameTimer.reset();

  // draw function
  // update function
});
