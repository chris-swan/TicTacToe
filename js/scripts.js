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
};

Board.prototype.win = function() {
  if (this.positionOne == "X" && this.positionTwo == "X" && this.positionThree == "X") {
    return "X wins";
  }
};

function PlayerOne(playerName) {
  this.playerName = playerName;
};

function PlayerTwo(playerName) {
  this.playerName = playerName;
};
