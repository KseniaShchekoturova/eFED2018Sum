// 1.	Подсчет Букв
function countChar(Str,symb){
  var entrNum = 0, i = 0;
  N = Str.length;
  while(i<N){
    if(Str[i]==symb){
    	entrNum++;
    }
	i++;
  }
  return(entrNum);
};

// 2.	Глубокое сравнение
// function deepCompare_old(Value1,Value2){
	// // проверка на типы
	// if (typeof Value1 != typeof Value2){
	  // return false;
	// }
	
	// // проверка на количество свойств
	// var Num1 = 0, Num2 = 0;
	// for(var key in Value1) {
		// Num1++;
	// }
	// for(var key in Value2) {
		// Num2++;
	// }
	// if (Num1 != Num2){
		// return false;
	// }
	
	
	// // проверка значений свойств
	// for(var key in Value1) {
		// if (Value1[key] !== Value2[key]){
			// return false;
		// }
	// }
	
	// return true;
// };

//2.	Глубокое сравнение
function deepCompare(Value1,Value2){
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

// 3.	Шахматная доска
function chessBoard(w,h){
  var i, j, Str = '', ch = false;
  for (i = 0; i < h; i++) {
    for (j = 0; j < w; j++) {
		ch = !ch;
		if(ch){
			// Str = Str + '#';
			Str+='#';
		}else{
			// Str = Str + ' ';
			Str+=' ';
		}      
    }
	Str = Str + '\n';
	if(w%2==0){
		ch = !ch;
	}
  }
  return(Str);
};

// 4.	Диапазон
function makeArray(elStart,elFinish,step){
	if (elStart == undefined 
	| elFinish == undefined){
		return('bad options');
	}
	
	var Arr = [], i = 0;
	
	if(step==undefined){
		step = 1;
	}
		
	if(elStart==elFinish){
		Arr[0] = elStart;
	}else if(elStart < elFinish){
		while(elStart<=elFinish){
			Arr[i] = elStart;
			i++;
			elStart+=step;
		}	
	}
	else{
		if (step>0){
			step = -step;
		}
		while(elStart>=elFinish){
			Arr[i] = elStart;
			i++;
			elStart+=step;
		}	
	}
	
	return(Arr);
};

// 5.	Наоборот
function reverseArray(Arr){
	var i = 0, newArr = [];
	L = Arr.length;
	
	while (i<L){
		newArr[i] = Arr[L-i-1];
		i++;
	}
	
	return(newArr);
};

function reverseArrayInPlace(Arr){
	var i = 0, val;
	L = Arr.length;
	
	while (i<L/2){
		val = Arr[i];
		Arr[i] = Arr[L-i-1];
		Arr[L-i-1] = val;
		i++;
	}
	
	return(Arr);
};

// 6.	Свертка
function mergeArrays(...arrays){
	
	var TotalArr = [];
	
	for (var i = 0; i < arrays.length; i++){
		TotalArr = TotalArr.concat(arrays[i]);
	}
	
	for (i = 0; i < TotalArr.length; i++){
		if (TotalArr.indexOf(TotalArr[i],i+1) > -1){
			TotalArr.splice(i, 1);
			i--;
		}
	}

	return TotalArr;
};

// 7.	Every и some
function everyIsNaN(Arr){
	var i;
	for (i = 0; i < Arr.length; i++){
		if (!isNaN(Arr[i])){
			return false;
		}
	}
	return true;
};

function someIsNaN(Arr){
	var i;
	for (i = 0; i < Arr.length; i++){
		if (isNaN(Arr[i])){
			return true;
		}
	}
	return false;
};

// 8.	Повтор
function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
};

function multiply(a,b){
	try{
		return multiplyOrThrow(a, b);
	}catch{
		return multiply(a, b);
	}
};

// 9.	Кавычки в тексте
// function replaceQuotes_old(text){
	// var regexpOpening = /‘/ig,
		// regexpClosing = /’/ig,
		// resultOpening,resultClosing;
	
	// while (true){
		// resultOpening = regexpOpening.exec(text);
		// resultClosing = regexpClosing.exec(text);
		
		// if ((!!resultOpening)&&(!!resultClosing)){
			// posOpening = resultOpening.index;
			// posClosing = resultClosing.index;
			// if (posOpening < posClosing){
				// text = text.substring(0,posOpening) + '"' + text.substring(posOpening+1);
				// text = text.substring(0,posClosing) + '"' + text.substring(posClosing+1);
			// }
			// regexpOpening.lastIndex = posClosing + 1;
			// regexpClosing.lastIndex = posClosing + 1;
		// }else{
			// break;
		// }
	// }
	  
	// return text;
// }

// 9.	Кавычки в тексте
function replaceQuotes(text){
	var reg = /‘.+?’/g, regResult;
	while (true){
		regResult = text.match(reg);
		if (!regResult){break};
		for (var i = 0; i < regResult.length; i++){
			subStr = regResult[i];
			subStr = '"' + subStr.substring(1,subStr.length-1) + '"';
			text = text.replace(regResult[i],subStr);
		}
	}
	return text;
}

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

// 11.	День и месяц
function getNames(date){
	//dateStr = date.toString();
	//var arr = dateStr.split(' ');
	//return arr[1] + ', ' + arr[0];
	
	var Month;
	switch(date.getMonth()){
		case 0:Month = 'January';break;
		case 1:Month = 'February';break;
		case 2:Month = 'March';break;
		case 3:Month = 'April';break;
		case 4:Month = 'May';break;
		case 5:Month = 'June';break;
		case 6:Month = 'July';break;
		case 7:Month = 'August';break;
		case 8:Month = 'September';break;
		case 9:Month = 'October';break;
		case 10:Month = 'November';break;
		case 11:Month = 'December';break;
	}
	
	var WeekDay;
	switch(date.getDay()){
		case 0:WeekDay = 'Sunday';break;
		case 1:WeekDay = 'Monday';break;
		case 2:WeekDay = 'Tuesday';break;
		case 3:WeekDay = 'Wednesday';break;
		case 4:WeekDay = 'Thursday';break;
		case 5:WeekDay = 'Friday';break;
		case 6:WeekDay = 'Saturday';break;
	}
	
	return Month + ', ' + WeekDay;
};

// 12.	Разница в годах
function differenceInYears(dateStart,dateFinish){
	daysBetween = (dateFinish - dateStart) / (24*3600*1000);
	yearsBeetween = Math.round(10 * daysBetween / 365)/10;
	return yearsBeetween;
}

// 13.	Погода Anomaly 
function findAnomaly(array, paramName){
	var returnObj = {
		max: array[0],
		min: array[0]
	};
	for (var i = 0; i < array.length; i++){
		if (Number(returnObj.max[paramName]) < Number(array[i][paramName])){
			returnObj.max = array[i];
		}
		if (Number(returnObj.min[paramName]) > Number(array[i][paramName])){
			returnObj.min = array[i];
		}
	}
	return returnObj;
}

// 14.	Статистика погоды
function weatherStat(obj){
	var array = historicalReviewMock[obj.city][obj.date.getFullYear()];
	var i = 0, totalTemp = 0;
	while (i < 12){
		totalTemp += array[i].avearage;
		i++;
	}
	return Math.round(totalTemp / 12);
}







