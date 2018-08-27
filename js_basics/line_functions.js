// 1.	Подсчет Букв
function countChar(text, char){
  var entryNumber = 0, i = 0;
  length = text.length;
  while (i < length){
    if (text[i] == char){
    	entryNumber++;
    }
	i++;
  }
  return entryNumber;
};

// 9.	Кавычки в тексте
function replaceSingleQuotesWithDoubleQuotes(text){
	var regExp = /‘.+?’/g, regExpResult;
	while (true){
		regExpResult = text.match(regExp);
		if (!regExpResult){break};
		for (var i = 0; i < regExpResult.length; i++){
			subStr = regExpResult[i];
			subStr = '"' + subStr.substring(1, subStr.length - 1) + '"';
			text = text.replace(regExpResult[i], subStr);
		}
	}
	return text;
}