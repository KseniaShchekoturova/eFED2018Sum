// 8.	Повтор
function multiply(a, b){
	try{
		return multiplyOrThrow(a, b);
	}catch{
		return multiply(a, b);
	}
};

function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
};

// 10.	Найти числа
function findNumbers(array){
	var numbersArray = [], item, regExp = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;
	
	for (var i = 0; i < array.length; i++){
		item = array[i];
		if (item == '.'){
			continue;
		} else if (!!regExp.exec(item)){
			numbersArray.push(item);
		}
	}
	
	return numbersArray;
}