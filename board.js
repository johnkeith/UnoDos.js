function Board () {
  this.board = [];

  this.letters = ["U","N","O","D","O",
                  "U","N","O","O","S",
                  "U","N","O","D","S",
                  "U","O","O","D","S",
                  "O","N","O","D","S"];
  this.score = 0;
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

Board.prototype.shuffleLetters = function() {
  this.letters.sort(function() {return 0.5 - Math.random();});
};

Board.prototype.getLetter = function() {
  return this.letters.splice(0,1);
};

Board.prototype.boardFull = function() {
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

Board.prototype.wordUp = function(row, col) {
  return this.board[row - 1][col].contents == "N" && this.board[row - 2][col].contents == "U";
};

Board.prototype.wordDown = function(row, col) {
  return this.board[row + 1][col].contents == "N" && this.board[row + 2][col].contents == "U";
};

Board.prototype.wordLeft = function(row, col) {
  return this.board[row][col - 1].contents == "N" && this.board[row][col - 2].contents == "U";
};

Board.prototype.wordRight = function(row, col) {
  return this.board[row][col + 1].contents == "N" && this.board[row][col + 2].contents == "U";
};

Board.prototype.wordCenterVert = function(row, col) {
  return this.board[row + 1][col].contents == "S" && this.board[row - 1][col].contents == "D" ||
         this.board[row + 1][col].contents == "D" && this.board[row - 1][col].contents == "S";
}; 

Board.prototype.wordCenterHorz = function(row, col) {
  return this.board[row][col + 1].contents == "S" && this.board[row][col - 1].contents == "D" ||
         this.board[row][col + 1].contents == "D" && this.board[row][col - 1].contents == "S";
};

Board.prototype.findOsOnBoard = function() {
  os_on_board = []
  $.each(this.board, function(idx_row, row) {
    $.each(row, function(idx_col, col) {
      if (col.contents == "O") {
        o_on_board.push([idx_row, idx_col]);
      }
    });
  });
  return os_on_board
};

Board.prototype.findWords = function(o_array) {
  _this = this;
  word_coords = [];
  $.each(o_array, function(index, coords) {
    row = coords[0];
    col = coords[1];
    if (row > 0 && row < 4) {
      if (_this.wordCenterVert(row, col)) {
        _this.raiseScore();
      }
    }
    if (row < 3) {
      if (_this.wordDown(row, col)) {
        _this.raiseScore();
      }
    }
    if (row > 1) {
      if (_this.wordUp(row, col)) {
        _this.raiseScore();
      }
    }
    if (col > 0 && col < 4) {
      if (_this.wordCenterHorz(row, col)) {
        _this.raiseScore();
      }
    }
    if (col < 3) {
      if (_this.wordRight(row, col)) {
        _this.raiseScore();
      }
    }
    if (col > 1) {
      if (_this.wordLeft(row, col)) {
        _this.raiseScore();
      }
    }
  });
  return word_coords;
};

Board.prototype.raiseScore = function() {
  this.score += 1
};
