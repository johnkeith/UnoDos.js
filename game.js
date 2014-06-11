$(document).ready(function(){
  var gameTimer = new Timer(2, 1000);

  gameTimer.start();

  var gameBoard = new Board();
  gameBoard.build_board();
  gameBoard.board_full();
  debugger;
  // draw function
  // update function
});
