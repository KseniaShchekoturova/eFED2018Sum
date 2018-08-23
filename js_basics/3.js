// 3.	Шахматная доска
function chessBoard(width,height){
  var i, j, Str = '', ch = false;
  for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
		ch = !ch;
		if(ch){
			Str += '#';
		}else{
			Str += ' ';
		}      
    }
	Str = Str + '\n';
	if(w%2 == 0){
		ch = !ch;
	}
  }
  return Str;
};