describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player(1);
      expect(testPlayer.mark()).to.equal("X");
   });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space (1);
    expect(testSpace.coordinate()).to.equal(1);
  });
});
