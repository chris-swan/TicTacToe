// Tests for Board :

describe("Board", function() {

  it("it creates a Board with specified properties.", function() {
    var testBoard = new Board(" ", " ", " ",
                              " ", " ", " ",
                              " ", " ", " ");
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

  it("it finds a simple winner.", function() {
    var testBoard = new Board("X", "X", "X",
                              " ", " ", " ",
                              " ", " ", " ");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds a simple loser.", function() {
    var testBoard = new Board("X", "O", "X",
                              " ", " ", " ",
                              " ", " ", " ");
    expect(testBoard.winner()).to.equal("no winner");
  });

  it("it finds a diagonal winner with PlayerX.", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", " ",
                              " ", " ", "X");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds a diagonal winner with PlayerO.", function() {
    var testBoard = new Board("O", "X", "X",
                              " ", "O", "X",
                              " ", " ", "O");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds some other winner I randomly wrote.", function() {
    var testBoard = new Board("O", "O", "X",
                              "O", "X", "X",
                              "O", "X", "O");
    expect(testBoard.winner()).to.equal("winner");
  });

  it("it finds some a cat's game.", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", "X",
                              "O", "X", "O");
    expect(testBoard.winner()).to.equal("cat's game");
  });

  it("it can place an X in a position.", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", "X", "X",
                              "O", "X", " ");
    testBoard.placeX(9);
    expect(testBoard.positionNine).to.equal("X");
  });

  it("it can place an O in a position.", function() {
    var testBoard = new Board("X", "O", "X",
                              "O", " ", "X",
                              "O", "X", "O");
    testBoard.placeO(5);
    expect(testBoard.positionFive).to.equal("O");
  });

});

// Tests for PlayerX :

describe("PlayerX", function() {

  it("it creates a Player with certain properties.", function() {
    var testPlayerX = new PlayerX("Chris");
    expect(testPlayerX.playerName).to.equal("Chris");
  });

});

// Tests for PlayerO :

describe("PlayerO", function() {

  it("it creates a Player with certain properties.", function() {
    var testPlayerO = new PlayerO("Jenna");
    expect(testPlayerO.playerName).to.equal("Jenna");
  });

});