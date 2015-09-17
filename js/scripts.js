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

Board.prototype.placeX = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.positionOne == " ") {
      this.positionOne = "X";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.positionTwo == " ") {
      this.positionTwo = "X";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.positionThree == " ") {
      this.positionThree = "X";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.positionFour == " ") {
      this.positionFour = "X";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.positionFive == " ") {
      this.positionFive = "X";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.positionSix == " ") {
      this.positionSix = "X";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.positionSeven == " ") {
      this.positionSeven = "X";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.positionEight == " ") {
      this.positionEight = "X";
    }
  } else if (clickedSquareNumber == 9) {
    if (this.positionNine == " ") {
      this.positionNine = "X";
    }
  }
}

Board.prototype.placeO = function(clickedSquareNumber) {
  if (clickedSquareNumber == 1) {
    if (this.positionOne == " ") {
      this.positionOne = "O";
    }
  } else if (clickedSquareNumber == 2) {
    if (this.positionTwo == " ") {
      this.positionTwo = "O";
    }
  } else if (clickedSquareNumber == 3) {
    if (this.positionThree == " ") {
      this.positionThree = "O";
    }
  } else if (clickedSquareNumber == 4) {
    if (this.positionFour == " ") {
      this.positionFour = "O";
    }
  } else if (clickedSquareNumber == 5) {
    if (this.positionFive == " ") {
      this.positionFive = "O";
    }
  } else if (clickedSquareNumber == 6) {
    if (this.positionSix == " ") {
      this.positionSix = "O";
    }
  } else if (clickedSquareNumber == 7) {
    if (this.positionSeven == " ") {
      this.positionSeven = "O";
    }
  } else if (clickedSquareNumber == 8) {
    if (this.positionEight == " ") {
      this.positionEight = "O";
    }
  } else if (clickedSquareNumber == 9) {
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

function PlayerX(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}

// PlayerO prototype :

function PlayerO(playerName, playerColor) {
  this.playerName = playerName;
  this.playerColor = playerColor;
}

// Initialize variables :

var board = new Board(" ", " ", " ", " ", " ", " ", " ", " ", " ", "X");
var playerX = new PlayerX(" ", " ");
var playerO = new PlayerO(" ", " ");

//Jquery stuff:
$(document).ready(function() {

  $("form#TicTacToePlayer").submit(function() {
    event.preventDefault();

    playerX.playerName = $("input#playerX-name").val();
    playerX.playerColor =$("input#playerX-color").val();
    playerO.playerName = $("input#playerO-name").val();
    playerO.playerColor = $("input#playerO-color").val();

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
          $(".positionTwo").empty().val();
          $(".positionTwo").append("O");
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
      $(this).removeClass('positionTwo clickable');
    });

    $(".positionThree").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionThree").empty().val();
        $(".positionThree").append("X");
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
          $(".positionThree").empty().val();
          $(".positionThree").append("O");
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
      $(this).removeClass('positionThree clickable');
    });

    $(".positionFour").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionFour").empty().val();
        $(".positionFour").append("X");
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
          $(".positionFour").empty().val();
          $(".positionFour").append("O");
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
      $(this).removeClass('positionFour clickable');
    });

    $(".positionFive").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionFive").empty().val();
        $(".positionFive").append("X");
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
          $(".positionFive").empty().val();
          $(".positionFive").append("O");
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
      $(this).removeClass('positionFive clickable');
    });

    $(".positionSix").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionSix").empty().val();
        $(".positionSix").append("X");
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
          $(".positionSix").empty().val();
          $(".positionSix").append("O");
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
      $(this).removeClass('positionSix clickable');
    });

    $(".positionSeven").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionSeven").empty().val();
        $(".positionSeven").append("X");
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
          $(".positionSeven").empty().val();
          $(".positionSeven").append("O");
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
      $(this).removeClass('positionSeven clickable');
    });

    $(".positionEight").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionEight").empty().val();
        $(".positionEight").append("X");
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
          $(".positionEight").empty().val();
          $(".positionEight").append("O");
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
      $(this).removeClass('positionEight clickable');
    });

    $(".positionNine").click(function() {
      if (board.turn == "X") {
        board.turn = "O";
        $(".positionNine").empty().val();
        $(".positionNine").append("X");
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
          $(".positionNine").empty().val();
          $(".positionNine").append("O");
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
      $(this).removeClass('positionNine clickable');
    });

});
