// 1.	Подсчет Букв
function countChar(Str, symb){
  var entrNum = 0, i = 0;
  N = Str.length;
  while (i < N){
    if(Str[i] == symb){
    	entrNum++;
    }
	i++;
  }
  return entrNum;
};