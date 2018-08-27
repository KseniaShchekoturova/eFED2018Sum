// 1.	Подсчет Букв
function countChar(text, char) {
  var entryNumber = 0;
  var i = 0;
  var length = text.length;

  while (i < length) {
    if (text[i] == char) {entryNumber++;}
    i++;
  }

  return entryNumber;
}

// 9.	Кавычки в тексте
function replaceAllSingleQuotesWithDouble(text) {
  var regExp = /‘.+?’/g;
  var regExpResult;

  while (true) {
    regExpResult = text.match(regExp);
    if (!regExpResult) {break;}
    for (var i = 0; i < regExpResult.length; i++) {
      text = replaceSpecificSingleQuotesWithDouble(text, regExpResult[i]);
    }
  }

  return text;
}

function replaceSpecificSingleQuotesWithDouble(text, subStringBefore) {
  var subStringAfter = '"' + subStringBefore.substring(1, subStringBefore.length - 1) + '"';
  text = text.replace(subStringBefore, subStringAfter);
  
  return text;
}
