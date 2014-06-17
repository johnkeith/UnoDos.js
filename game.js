$(document).ready(function(){
  _this = this;

  var gameBoard = new Board();
  gameBoard.build_board();

  gameBoard.board[0][1].contents = "D";
  gameBoard.board[0][2].contents = "O";
  gameBoard.board[0][3].contents = "S";

  gameBoard.board[2][2].contents = "U";
  gameBoard.board[2][3].contents = "N";
  gameBoard.board[2][4].contents = "O";
  
  function drawBoard() {
    $.each(gameBoard.board, function(row_idx, row) {
      var rowContainer = "<div class='row'>";
      $.each(row, function(col_idx, col) {
        rowContainer += "<div data-row='" + row_idx + "' data-col='" + col_idx + "' class='tile'>" +
                        "<div class='contents'>" + col.contents + "</div>" +
                        "<div class='up-button'></div><div class='down-button'></div>" +
                        "<div class='right-button'></div><div class='left-button'></div>" +
                        "</div>"
      });
      rowContainer += "</div>"
      $('.board-container').append(rowContainer);
    });
  }
  drawBoard();

  // Move Listeners //

  $('.up-button').click(function() {
    var row = parseInt($(this).parent().attr('data-row'))
    var col = parseInt($(this).parent().attr('data-col'))
    var rowUp = parseInt($(this).parent().attr('data-row')) - 1

    if (gameBoard.checkForEmptyTile("up", [row, col])) {
      clickedContents = gameBoard.board[row][col].contents;
      $(this).parent().find('.contents').html(" ");
      $(".tile[data-row=" + rowUp + "][data-col=" + col +"]").find('.contents').html(clickedContents);
      gameBoard.board[row - 1][col].contents = clickedContents;
      gameBoard.board[row][col].contents =  " ";
    }
  });

  $('.down-button').click(function() {
    var row = parseInt($(this).parent().attr('data-row'))
    var col = parseInt($(this).parent().attr('data-col'))
    var rowDown = parseInt($(this).parent().attr('data-row')) + 1
    
    if (gameBoard.checkForEmptyTile("down", [row, col])) {
      clickedContents = gameBoard.board[row][col].contents;
      $(this).parent().find('.contents').html(" ");
      $(".tile[data-row=" + rowDown + "][data-col=" + col + "]").find('.contents').html(clickedContents);
      gameBoard.board[row + 1][col].contents = clickedContents;
      gameBoard.board[row][col].contents =  " ";
    }
  });

  $('.right-button').click(function() {
    var row = parseInt($(this).parent().attr('data-row'))
    var col = parseInt($(this).parent().attr('data-col'))
    var colRight = parseInt($(this).parent().attr('data-col')) + 1
    
    if (gameBoard.checkForEmptyTile("right", [row, col])) {
      clickedContents = gameBoard.board[row][col].contents;
      $(this).parent().find('.contents').html(" ");
      $(".tile[data-row=" + row + "][data-col=" + colRight + "]").find('.contents').html(clickedContents);
      gameBoard.board[row][col + 1].contents = clickedContents;
      gameBoard.board[row][col].contents =  " ";
    }
  });

  $('.left-button').click(function() {
    var row = parseInt($(this).parent().attr('data-row'))
    var col = parseInt($(this).parent().attr('data-col'))
    var colRight = parseInt($(this).parent().attr('data-col')) - 1
    
    if (gameBoard.checkForEmptyTile("left", [row, col])) {
      clickedContents = gameBoard.board[row][col].contents;
      $(this).parent().find('.contents').html(" ");
      $(".tile[data-row=" + row + "][data-col=" + colRight + "]").find('.contents').html(clickedContents);
      gameBoard.board[row][col - 1].contents = clickedContents;
      gameBoard.board[row][col].contents =  " ";
    }
  });

  // END Move Listeners //

  
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


  // array_os = gameBoard.findOsOnBoard();
  // gameBoard.findWords(array_os);

  // debugger;
  // gameTimer.timerSpeed = 100;
  // gameTimer.reset();

  // draw function
  // update function
});
