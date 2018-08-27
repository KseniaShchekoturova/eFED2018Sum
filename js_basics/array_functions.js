// 4.	Диапазон
function getDiapason(start, finish, step){
	if (start == undefined | finish == undefined | step == 0){return 'bad options';}
	if (step == undefined){step = 1;}
	
	var diapason = [];	
		
	if (start == finish){
		diapason.push(start);
	} else {
		if ((finish - start) * step < 0){step = -step;}
		if (start < finish){
			while(start <= finish){
			diapason.push(start);
			start += step;
		} else {
			while(start >= finish){
			diapason.push(start);
			start += step;
		}
	}
	
	return diapason;
};

// 5.	Наоборот
function reverseArray(array){
	var i = 0, L = array.length, result = [];
	
	while (i < L){
		result[i] = array[L-i-1];
		i++;
	}
	
	return result;
};

function reverseArrayInPlace(array){
	var i = 0, pastValue, length = array.length;
	
	while (i < length/2){
		pastValue = array[i];
		array[i] = array[length - i - 1];
		array[length-i-1] = pastValue;
		i++;
	}
	
	return array;
};

// 6.	Свертка
function mergeArrays(...arrays){
	var totalArr = [];
	
	for (var i = 0; i < arrays.length; i++){
		totalArr = totalArr.concat(arrays[i]);
	}
	
	for (i = 0; i < totalArr.length; i++){
		if (totalArr.indexOf(totalArr[i], i+1) > -1){
			totalArr.splice(i, 1);
			i--;
		}
	}

	return totalArr;
};