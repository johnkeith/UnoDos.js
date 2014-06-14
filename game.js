$(document).ready(function(){
  var gameBoard = new Board();
  gameBoard.build_board();
  
  /////////////////////////////////////
  // fundamental game loop
  // 1. load board
  // 2. place tiles in dom *
  // 3. start timer (use setInterval within document.ready function)
  //   Every X seconds
  //     Find emtpy space
  //     Get letter 
  //     Insert new tile
  //     Check for words
  //       Remove words when found *
  //       Animate removal *
  //     Check if board full( game over)
  //       if not, check if score is above threshold to modify the interval timer
  //       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers
  // 4. listen for clicks on dom objects
  //   when clicked, check if tile in direction is empty
  //   if empty, move contents of clicked tile into the other
  //     check for words
  //       remove words when found *
  //       animate removal *
  //     check if board full(game over)
  //       if not check if score is above threshold
  /////////////////////////////////////


  // var gameTimer = new Timer(2, 1000);
  // gameTimer.start();

  // // insert test piece at 2,2
  // gameBoard.board[0][1].contents = "D";
  // gameBoard.board[0][2].contents = "O";
  // gameBoard.board[0][3].contents = "S";

  // gameBoard.board[2][2].contents = "U";
  // gameBoard.board[2][3].contents = "N";
  // gameBoard.board[2][4].contents = "O";

  // array_os = gameBoard.findOsOnBoard();
  // gameBoard.findWords(array_os);

  // debugger;
  // gameTimer.timerSpeed = 100;
  // gameTimer.reset();

  // draw function
  // update function
});
