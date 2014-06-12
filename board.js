function Board () {
  this.board = [];

  this.letters = ["U","N","O","D","O",
                  "U","N","O","O","S",
                  "U","N","O","D","S",
                  "U","O","O","D","S",
                  "O","N","O","D","S"];
};

Board.prototype.build_board = function() {
  for (var i = 0; i < 5; i++) {
    row = [];
    for( var j = 0; j < 5; j++) {
      row.push(new Tile())
    }
    this.board.push(row);
  }
};

Board.prototype.shuffle_letters = function() {
  this.letters.sort(function() {return 0.5 - Math.random();});
};

Board.prototype.get_letter = function() {
  return this.letters.splice(0,1);
};

Board.prototype.board_full = function() {
  var empty = true;
  $.each(this.board, function(index, row) {
    if (empty == false) {
      return false
    } else {
      $.each(row, function(index, col) {
        if (col.contents == " ") {
          empty = false;
        };
      });
    }
  });
  return empty;
};

Board.prototype.word_up = function(row, col) {
  return this.board[row - 1][col].contents == "N" && this.board[row - 2][col].contents == "U";
};

Board.prototype.word_down = function(row, col) {
  return this.board[row + 1][col].contents == "N" && this.board[row + 2][col].contents == "U";
};

Board.prototype.word_left = function(row, col) {
  return this.board[row][col - 1].contents == "N" && this.board[row][col - 2].contents == "U";
};

Board.prototype.word_right = function(row, col) {
  return this.board[row][col + 1].contents == "N" && this.board[row][col + 2].contents == "U";
};

Board.prototype.word_center_vert = function(row, col) {
  return this.board[row + 1][col].contents == "S" && this.board[row - 1][col].contents == "D" ||
         this.board[row + 1][col].contents == "D" && this.board[row - 1][col].contents == "S";
}; 

Board.prototype.word_center_horz = function(row, col) {
  return this.board[row][col + 1].contents == "S" && this.board[row][col - 1].contents == "D" ||
         this.board[row][col + 1].contents == "D" && this.board[row][col - 1].contents == "S";
};

Board.prototype.find_o_on_board = function() {
  o_on_board = []
  $.each(this.board, function(idx_row, row) {
    $.each(row, function(idx_col, col) {
      if (col.contents == "O") {
        o_on_board.push([idx_row, idx_col]);
      }
    });
  });
  return o_on_board
};

// $.each(gameBoard.board, function(idx, row) { $.each(row, function(idx_col, col) {console.log(col)}) })
