function Player(playerNumber) {
  this.playerNumber = playerNumber;
};

Player.prototype.mark = function(playerNumber) {
  // var playerMark = this.playerNumber;
    if (this.playerNumber === 1) {
      return "X";
    } else {
      return "O";
    }
};


// function Space(x-coordinate) {
//   this.x-coordinate = x-coordinate;
// }




// Game board: (1, 1), (1, 2), (1, 3),
//             (2,1), (2, 2), (2, 3),
//             (3,1), (3, 2), (3, 3),
