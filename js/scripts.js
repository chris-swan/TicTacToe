// Board prototype :

function Board(positionOne, positionTwo, positionThree, positionFour, positionFive, positionSix, positionSeven, positionEight, positionNine, turn) {
  this.positionOne = positionOne;
  this.positionTwo = positionTwo;
  this.positionThree = positionThree;
  this.positionFour = positionFour;
  this.positionFive  = positionFive;
  this.positionSix = positionSix;
  this.positionSeven = positionSeven;
  this.positionEight = positionEight;
  this.positionNine = positionNine;
  this.turn = turn;
}

Board.prototype.winner = function() {
  if ((this.positionOne == this.positionTwo & this.positionTwo == this.positionThree &
    this.positionOne != " ") ||
    (this.positionFour == this.positionFive & this.positionFive == this.positionSix &
      this.positionFour != " ") ||
    (this.positionSeven == this.positionEight & this.positionEight == this.positionNine &
      this.positionSeven != " ") ||
    (this.positionOne == this.positionFour & this.positionFour == this.positionSeven &
      this.positionOne != " ") ||
    (this.positionTwo == this.positionFive & this.positionFive == this.positionEight &
      this.positionTwo != " ") ||
    (this.positionThree == this.positionSix & this.positionSix == this.positionNine &
      this.positionThree != " ") ||
    (this.positionThree == this.positionFive & this.positionFive == this.positionSeven &
      this.positionThree != " ") ||
    (this.positionOne == this.positionFive & this.positionFive == this.positionNine &
      this.positionOne != " ")) {
    return "winner";
  } else if (this.positionOne != " " & this.positionTwo != " "
    & this.positionThree != " " & this.positionFour != " "
    & this.positionFive != " " & this.positionSix != " "
    & this.positionSeven != " " & this.positionEight != " "
    & this.positionNine != " ") {
    return "cat's game";
  } else {
    return "no winner";
  }
}

Board.prototype.placeX = function(clickedPositionNumber) {
  if (clickedPositionNumber == 1) {
    if (this.positionOne == " ") {
      this.positionOne = "X";
    }
  } else if (clickedPositionNumber == 2) {
    if (this.positionTwo == " ") {
      this.positionTwo = "X";
    }
  } else if (clickedPositionNumber == 3) {
    if (this.positionThree == " ") {
      this.positionThree = "X";
    }
  } else if (clickedPositionNumber == 4) {
    if (this.positionFour == " ") {
      this.positionFour = "X";
    }
  } else if (clickedPositionNumber == 5) {
    if (this.positionFive == " ") {
      this.positionFive = "X";
    }
  } else if (clickedPositionNumber == 6) {
    if (this.positionSix == " ") {
      this.positionSix = "X";
    }
  } else if (clickedPositionNumber == 7) {
    if (this.positionSeven == " ") {
      this.positionSeven = "X";
    }
  } else if (clickedPositionNumber == 8) {
    if (this.positionEight == " ") {
      this.positionEight = "X";
    }
  } else if (clickedPositionNumber == 9) {
    if (this.positionNine == " ") {
      this.positionNine = "X";
    }
  }
}

Board.prototype.placeO = function(clickedPositionNumber) {
  if (clickedPositionNumber == 1) {
    if (this.positionOne == " ") {
      this.positionOne = "O";
    }
  } else if (clickedPositionNumber == 2) {
    if (this.positionTwo == " ") {
      this.positionTwo = "O";
    }
  } else if (clickedPositionNumber == 3) {
    if (this.positionThree == " ") {
      this.positionThree = "O";
    }
  } else if (clickedPositionNumber == 4) {
    if (this.positionFour == " ") {
      this.positionFour = "O";
    }
  } else if (clickedPositionNumber == 5) {
    if (this.positionFive == " ") {
      this.positionFive = "O";
    }
  } else if (clickedPositionNumber == 6) {
    if (this.positionSix == " ") {
      this.positionSix = "O";
    }
  } else if (clickedPositionNumber == 7) {
    if (this.positionSeven == " ") {
      this.positionSeven = "O";
    }
  } else if (clickedPositionNumber == 8) {
    if (this.positionEight == " ") {
      this.positionEight = "O";
    }
  } else if (clickedPositionNumber == 9) {
    if (this.positionNine == " ") {
      this.positionNine = "O";
    }
  }
}

Board.prototype.clearAll = function() {
  $(".position-one").off();
  $(".position-two").off();
  $(".position-three").off();
  $(".position-four").off();
  $(".position-five").off();
  $(".position-six").off();
  $(".position-seven").off();
  $(".position-eight").off();
  $(".position-nine").off();
}

// PlayerX prototype :

function PlayerX(playerName) {
  this.playerName = playerName;
}

// PlayerO prototype :

function PlayerO(playerName) {
  this.playerName = playerName;
}

// Initialize variables :

var board = new Board(" ", " ", " ", " ", " ", " ", " ", " ", " ", "X");
var playerX = new PlayerX(" ");
var playerO = new PlayerO(" ");

//Jquery stuff:
$(document).ready(function() {


//add user names and begin play:
  $("form#TicTacToePlayer").submit(function() {
    event.preventDefault();

    playerX.playerName = $("input#playerX-name").val();
    playerO.playerName = $("input#playerO-name").val();

    $(".playerX-name").empty().val();
    $(".playerX-name").append(playerX.playerName);
    $(".playerO-name").empty().val();
    $(".playerO-name").append(playerX.playerName);
    $(".turn").empty().val();
    $(".turn").append(playerX.playerName);

  });

    $(".positionOne").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionOne").empty().val();
        $(".positionOne").append("X");
        board.positionOne = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionOne").empty().val();
          $(".positionOne").append("O");
          board.positionOne = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionOne clickable');
    });

    $(".positionTwo").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionTwo").empty().val();
        $(".positionTwo").append("X");
        board.positionTwo = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionTwo").empty().val();
          $(".positionTwo").append("O");
          board.positionTwo = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionTwo clickable');
    });

    $(".positionThree").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionThree").empty().val();
        $(".positionThree").append("X");
        board.positionThree = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionThree").empty().val();
          $(".positionThree").append("O");
          board.positionThree = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionThree clickable');
    });

    $(".positionFour").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionFour").empty().val();
        $(".positionFour").append("X");
        board.positionFour = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionFour").empty().val();
          $(".positionFour").append("O");
          board.positionFour = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionFour clickable');
    });

    $(".positionFive").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionFive").empty().val();
        $(".positionFive").append("X");
        board.positionFive = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionFive").empty().val();
          $(".positionFive").append("O");
          board.positionFive = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionFive clickable');
    });

    $(".positionSix").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionSix").empty().val();
        $(".positionSix").append("X");
        board.positionSix = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionSix").empty().val();
          $(".positionSix").append("O");
          board.positionSix = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionSix clickable');
    });

    $(".positionSeven").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionSeven").empty().val();
        $(".positionSeven").append("X");
        board.positionSeven = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionSeven").empty().val();
          $(".positionSeven").append("O");
          board.positionSeven = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionSeven clickable');
    });

    $(".positionEight").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionEight").empty().val();
        $(".positionEight").append("X");
        board.positionEight = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionEight").empty().val();
          $(".positionEight").append("O");
          board.positionEight = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionEight clickable');
    });

    $(".positionNine").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionNine").empty().val();
        $(".positionNine").append("X");
        board.positionNine = "X";
        $(".turn").empty().val();
        $(".turn").append(playerO.playerName);

        if (board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
          }
        } else {
          board.turn = "X";
          $(".positionNine").empty().val();
          $(".positionNine").append("O");
          board.positionNine = "O";
          $(".turn").empty().val();
          $(".turn").append(playerX.playerName);

          if(board.winner() == "winner") {
          $(".turn-title").toggle();
          $(".winner").toggle();
          board.clearAll();
        }
      }
      $(this).off();
      $(this).removeClass('positionNine clickable');
    });

});
