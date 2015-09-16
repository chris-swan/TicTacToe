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

  // it("lets a player mark a space", function() {
  //   var testPlayer = new Player("X");
  //   var testSpace = new Space (1);
  //   // testSpace.mark_by(testPlayer);
  //   expect(testSpace.markedBy()).to.equal(testPlayer);
  // });
});

describe('Board', function() {
  it("creates 9 spaces to play", function() {
    var testBoard = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(testBoard.createBoard()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("creates tests for winning combinations when player blocks off a row.")
  var winningMove = board( "X" 1,"X" 2,"X"3);
  expect(testBoard.winningMove()).to.equal("X wins the game!");
});
