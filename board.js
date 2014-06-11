var Board = function() {
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
      // row.push(new Tile)
      row.push("J");
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
        if (col == " ") {
          empty = false;
        };
      });
    }
  });
  return empty;
};
