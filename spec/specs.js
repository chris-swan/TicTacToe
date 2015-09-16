describe('Board', function() {
  it("sets up 9 spaces.", function() {
    var testBoard = new Board(" ", " ", " ", " ", " ", " ", " ", " ", " ");
    expect(testBoard.positionOne).to.equal(" ");
    expect(testBoard.positionTwo).to.equal(" ");
    expect(testBoard.positionThree).to.equal(" ");
    expect(testBoard.positionFour).to.equal(" ");
    expect(testBoard.positionFive).to.equal(" ");
    expect(testBoard.positionSix).to.equal(" ");
    expect(testBoard.positionSeven).to.equal(" ");
    expect(testBoard.positionEight).to.equal(" ");
    expect(testBoard.positionNine).to.equal(" ");
  });
  it("finds a one row winner.", function() {
    var testBoard = new Board("X", "X", "X", " ", " ", " ", " ", " ", " ");
    expect(testBoard.win()).to.equal("X wins");
  });
});

describe("PlayerOne", function() {
  it("it creates a Player.", function() {
    var testPlayerOne = new PlayerOne("Jenna");
    expect(testPlayerOne.playerName).to.equal("Jenna");
  });
});

describe("PlayerTwo", function() {
  it("it creates a Player.", function() {
    var testPlayerTwo = new PlayerTwo("Jenna");
    expect(testPlayerTwo.playerName).to.equal("Jenna");
  });
});
//
// // Board.prototype.markBoard = function() {
// //   var board = {one:"X", two:"O"};
// //var board= {1:"X", 2:"O" 3:"X" 4:"O"....}
//   {X, X X.
//   " ", " ", " "}

//   board = [e,e,"x",e,e,e,"o",e,e];
//   this[space] = player;
//
//   if (board[space] != e) {
//     cant do anything
//   } else {
//     board[space] = mark;
//   }
//   }
