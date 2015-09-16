describe('Board', function() {
  it("creates 9 spaces to play", function() {
    var testBoard = new Board();
    expect(testBoard.spaces.to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  });
});

//   it("creates tests for winning combinations when player X blocks off a row.", function() {
//   var testMove = new Board(("X", 1),("X", 2),("X", 3));
//   expect(testMove.winningMove()).to.equal("X wins the game!");
//   });
//
//   it("creates tests for winning combinations when player O blocks off a row.", function() {
//   var testMove = new Board(("O", 1),("O", 2),("O", 3));
//   expect(testMove.winningMove()).to.equal("O wins the game!");
//   });
// });
//
describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark()).to.equal("X");
   });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space (1);
    expect(testSpace.positionTaken()).to.equal(1);
  });
});




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
