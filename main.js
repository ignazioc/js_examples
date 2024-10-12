import { Chess } from "chess.js";

const piecesIcons = {
  r: { icon: "fa-chess-rook", color: "black" },
  n: { icon: "fa-chess-knight", color: "black" },
  b: { icon: "fa-chess-bishop", color: "black" },
  q: { icon: "fa-chess-queen", color: "black" },
  k: { icon: "fa-chess-king", color: "black" },
  p: { icon: "fa-chess-pawn", color: "black" },
  R: { icon: "fa-chess-rook", color: "white" },
  N: { icon: "fa-chess-knight", color: "white" },
  B: { icon: "fa-chess-bishop", color: "white" },
  Q: { icon: "fa-chess-queen", color: "white" },
  K: { icon: "fa-chess-king", color: "white" },
  P: { icon: "fa-chess-pawn", color: "white" },
  ".": { icon: null, color: null },
};

showChessBoard();

function showChessBoard() {
  const game = new Chess();
  game.move("e4");
  game.move("e5");
  game.move("Nf3");
  
  const asciiGame = cleanUpChessGame(game);

  console.assert(asciiGame.length === 8, "The board should have 8 rows");

  asciiGame.forEach((row, i) => {
    row.forEach((squareChar, j) => {
      const backgroundColor = (i + j) % 2 === 0 ? "light" : "dark";
      const pieceIcon = piecesIcons[squareChar]["icon"];
      const pieceColor = piecesIcons[squareChar]["color"];
      const squareSpan = createSquare(backgroundColor);
      const pieceSpan = createPiece(pieceIcon, pieceColor);

      squareSpan.appendChild(pieceSpan);
      document.body.appendChild(squareSpan);
    });
    const br = document.createElement("br");
    document.body.appendChild(br);
  });
}

function createSquare(backgroundColor) {
  const square = document.createElement("span");
  square.className = `square square-${backgroundColor}`;
  return square;
}

function createPiece(name, pieceColor) {
  const icon = document.createElement("span");
  icon.className = `fa-solid ${name}`;
  icon.style.color = pieceColor;
  return icon;
}

function cleanUpChessGame(game) {
  return game
    .ascii()
    .split("\n")
    .slice(1, 9)
    .map((file) => file.split("").filter((char) => char in piecesIcons));
}
