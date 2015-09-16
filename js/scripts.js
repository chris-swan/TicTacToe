function Player(playerNumber) {
  this.playerNumber = playerNumber;
};

Player.prototype.mark = function() {
  // var playerMark = this.playerNumber;
    if (this.playerNumber === 1) {
      return "X";
    } else {
      return "O";
    }
};

function Space(row, column) {
  this.row = row;
  this.column = column;
};

Space.prototype.coordinate = function() {
  if (this.row === 1) {
    return 1;
  } else {
    return 2;
  }
};




                //Y column
//                |
//                V
// Game board: (1, 1), (1, 2), (1, 3),
//             (2,1), (2, 2), (2, 3),
//    row x->   (3,1), (3, 2), (3, 3),
