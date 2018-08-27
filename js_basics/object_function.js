// 2.	Глубокое сравнение
function compareContent(value1, value2){
	if (typeof value1 != typeof value2){return false;}
	
	if (typeof value1 == 'object'){
		if (Object.keys(value1).length != Object.keys(value2).length){return false};
		try{
			for(var key in value1){
				var areEqual = deepCompare(value1[key],value2[key]);
				if (!areEqual){return false;};
			}
		}catch{return false}
	}else {
		if (value1 !== value2){return false;}
	}
	
	return true;
};