// 3.	Шахматная доска
function makeChessBoard(width, height) {
  var i,
    j,
    chessBoard = "",
    shift = false;

  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
      shift = !shift;
      if (shift) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }

    chessBoard += "\n";
    if (width % 2 == 0) shift = !shift;
  }

  return chessBoard;
}
