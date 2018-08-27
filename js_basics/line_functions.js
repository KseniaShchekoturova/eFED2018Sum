// 1.	Подсчет Букв
function countChar(text, char) {
  var entryNumber = 0,
    i = 0,
    length = text.length;

  while (i < length) {
    if (text[i] == char) entryNumber++;
    i++;
  }

  return entryNumber;
}

// 9.	Кавычки в тексте
function replaceSingleQuotesWithDouble(text) {
  var regExp = /‘.+?’/g,
    regExpResult,
    subString;

  while (true) {
    regExpResult = text.match(regExp);
    if (!regExpResult) break;
    for (var i = 0; i < regExpResult.length; i++) {
      subString = regExpResult[i];
      subString = '"' + subString.substring(1, subString.length - 1) + '"';
      text = text.replace(regExpResult[i], subString);
    }
  }

  return text;
}
