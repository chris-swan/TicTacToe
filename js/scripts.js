function Player(player) {
  this.player = player;
};

Player.prototype.mark = function() {
  // var playerMark = this.playerNumber;
    if (this.player === "X") {
      return "X";
    } else {
      return "O";
    }
};

function Board(positionOne, positionTwo, positionThree, positionFour, positionFive, positionSix, positionSeven, positionEight, positionNine) {
  this.positionOne = positionOne;
  this.positionTwo = positionTwo;
  this.positionThree = positionThree;
  this.positionFour = positionFour;
  this.positionFive = positionFive;
  this.positionSix = positionSix;
  this.positionSeven = positionSeven;
  this.positionEight = positionEight;
  this.positionNine = positionNine;
};

Board.prototype.createBoard = function() {
  var boardSetUP = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return boardSetUP;
}


function Space(position) {
  this.position = position;
};

Space.prototype.positionTaken = function(player, position) {
  var positionTaken = (this.player, this.position);
  return positionTaken;

};

// Space.prototype.markedBy = function() {
//
//   var position =
// }

// Winning variables = (x1, x2, x3) || (o1 o2  o3);




                //Y column
//                |
//                V
// Game board: (1), (2), (3),
//             (4), (5), (6),
//    row x->   (7), (8), (9),
