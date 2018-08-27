// 3.	Шахматная доска
function makeChessBoard(width, height) {
  var chessBoard = "";
  var shift = false;

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      shift = !shift;
      if (shift) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }

    chessBoard += "\n";
    if (width % 2 == 0) {shift = !shift;}
  }

  return chessBoard;
}
