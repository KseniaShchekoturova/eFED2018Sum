// 10.	Найти числа
function findNumbers(array){
	var returnArray = [], item, regexp = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;
	for (var i = 0; i < array.length; i++){
		item = array[i];
		if (item=='.'){
			continue;
		}else if (!!regexp.exec(item)){
			returnArray.push(item);
		}
	}
	
	return returnArray;
}