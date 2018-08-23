// 2.	Глубокое сравнение
function deepCompare(Value1, Value2){
	// проверка на типы
	if (typeof Value1 != typeof Value2){
	  return false;
	}
	
	if (typeof Value1 == 'object'){
		// проверка на количество свойств объектов
		if (Object.keys(Value1).length != Object.keys(Value2).length){return false};
		// проверка на имена свойств объектов и значения свойств объектов
		try{
			for(var key in Value1){
				equal = deepCompare(Value1[key],Value2[key]);
				if (!equal){return false;};
			}
		}catch{return false}
	}else {
		if(Value1 !== Value2){return false;}
	}
	
	// если нигде не свалилось в ложь, то 
	return true;
};