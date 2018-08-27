// 8.	Повтор
function multiply(a, b) {
  try {
    return multiplyOrThrow(a, b);
  } catch (MultiplicatorUnitFailure) {
    return multiply(a, b);
  }
}

function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw "MultiplicatorUnitFailure";
  }
}

// 10.	Найти числа
function findNumbers(array) {
  var numbersArray = [];

  for (var i = 0; i < array.length; i++) {
    if (isNumber(array[i])) numbersArray.push(array[i]);
  }

  return numbersArray;
}

function isNumber(value) {
  if (value == ".") return false;

  var regExp = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;

  return !!regExp.exec(value);
}
