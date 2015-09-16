function Player(player) {
  this.player = player;
};

Player.prototype.mark = function(space) {
  // var playerMark = this.playerNumber;
    if (this.player === "X") {
      this.spaces[space] = "X";
      return "X";
    } else {
      this.spaces[space] = "O";
      return "O";
    }
};

// Construct a new Board
function Board() {
  this.spaces = {
    1:null,
    2:null,
    3:null,
    4:null,
    5:null,
    6:null,
    7:null,
    8:null,
    9:null
  };
};

// Board.prototype.winningMove = function() {
//   if this.spaces[1] === "X" &&
//
//
//   if ((("X", 1),("X", 2),("X", 3)) || (("X", 4),("X", 5),("X", 6)) || (("X", 7),("X", 8),("X", 9))) {
//       var result = "X wins the game!";
//     } else if ((("O", 1),("O", 2),("O", 3)) || (("O", 4),("O", 5),("O", 6)) || (("O", 7),("O", 8),("O", //9))) {
//       var result = "O wins the game!";
//     }
//
//     return result;
// };
//
// function Space(position) {
//   this.position = position;
// };
//
// Space.prototype.positionTaken = function(player, position) {
//   var positionTaken = (this.player, this.position);
//   return positionTaken;
//
// };

// var newBoard = new Board();
//
// newBoard.spaces[3] = "X";
// newBoard.spaces[8] = "O";

// function Board() {
//   board = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//   player =
// }

// Board.prototype.createBoard = function() {
//   var boardSetUP = { "One":player, "Two":player, "Three":player, "Four":player, "Five":player, "Six":player, "Seven":player, "Eight":player,  "Nine":player };
//   return boardSetUP;
//
// };



// Board.prototype.markBoard = function() {
//   var board = {one:"X", two:"O"};
//   board = [e,e,"x",e,e,e,"o",e,e];
//   this[space] = player;
//
//   if (board[space] != e) {
//     cant do anything
//   } else {
//     board[space] = mark;
//   }
//   }

// var board = {one:"X", two:"Y"};
//
// function markBoard(space, player) {
//   this[space] = player;
// }
//
// board = [e,e,"x",e,e,e,"y",e,e];
//
// if (board[space] != e) {
//   cant do anything
// } else {
//   board[space] = mark;
// }








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
