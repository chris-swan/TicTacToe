describe('TicTacToe', function() {
  it("accepts a user input and puts it on their correct space", function() {
    var testTicTacToe = new Game("playerOne", "x", "A1");
    expect(testTicTacToe.firstPlay).to.equal("x", "A1");
  });
