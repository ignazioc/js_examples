import { Chess } from "chess.js";

loadChess();

function createPiece(name, color, asdfa) {
  const piece = document.createElement("span");
  piece.style.width = "50px";
  piece.style.height = "50px";
  piece.style.backgroundColor = color;
  piece.style.color = asdfa
  piece.style.display = "inline-block";
  piece.style.textAlign = "center";
  piece.style.fontSize = "30px";
  piece.style.border = "1px solid black";
  piece.style.fontWeight = "bold";
  piece.style.lineHeight = "50px";
  piece.textContent = name;
  document.body.appendChild(piece);
}

function loadChess() {
  const asciiBoard = new Chess().ascii();
  const ranks = asciiBoard.split("\n");

  const pieces = ranks.slice(1, 9);

  pieces.forEach((rank) => {
    console.log(rank);
    const pieces = rank.split("");
    let backgroundColor = "white";
    let pieceColor = "black";
    pieces.forEach((piece) => {
      switch (piece) {
        case " ":
          break;
        case "|":
          break;
        case "r":
          createPiece("♜", backgroundColor, pieceColor);
          var tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "n":
          createPiece("♞", backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "b":
          createPiece("♝", backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "q":
          createPiece("♛",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "k":
          createPiece("♚",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "p":
          createPiece("♟",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case ".":
          createPiece(".",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "R":
          createPiece("♜",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "N":
          createPiece("♞",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "B":
          createPiece("♝",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "Q":
          createPiece("♛",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "K":
          createPiece("♚",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
        case "P":
          createPiece("♟",backgroundColor, pieceColor);
          tmp = backgroundColor 
          backgroundColor = pieceColor;
          pieceColor = tmp;
          break;
      }
    });
    const br = document.createElement("br");
    document.body.appendChild(br);
  });
}
