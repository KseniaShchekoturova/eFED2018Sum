// 9.	Кавычки в тексте
function replaceQuotes(text){
	var reg = /‘.+?’/g, regResult;
	while (true){
		regResult = text.match(reg);
		if (!regResult){break};
		for (var i = 0; i < regResult.length; i++){
			subStr = regResult[i];
			subStr = '"' + subStr.substring(1, subStr.length-1) + '"';
			text = text.replace(regResult[i], subStr);
		}
	}
	return text;
}