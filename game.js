$(document).ready(function(){
  var gameTimer = new Timer(2, 1000);
  
  gameTimer.start();
  
  var gameBoard = new Board();
  gameBoard.build_board();
  // insert test piece at 2,2
  gameBoard.board[0][1].contents = "D";
  gameBoard.board[0][2].contents = "O";
  gameBoard.board[0][3].contents = "S";

  gameBoard.board[2][2].contents = "U";
  gameBoard.board[2][3].contents = "N";
  gameBoard.board[2][4].contents = "O";

  array_os = gameBoard.findOsOnBoard();
  gameBoard.findWords(array_os);

  for (var i = 0; i< 100; i++) {
    console.log(gameBoard.findEmtpyTile());
  }

  debugger;
  // gameTimer.timerSpeed = 100;
  // gameTimer.reset();

  // draw function
  // update function
});
