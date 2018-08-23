// 5.	Наоборот
function reverseArray(Arr){
	var i = 0, newArr = [], L = Arr.length;
	
	while (i < L){
		newArr[i] = Arr[L-i-1];
		i++;
	}
	
	return newArr;
};

function reverseArrayInPlace(Arr){
	var i = 0, pastValue, L = Arr.length;
	
	while (i<L/2){
		pastValue = Arr[i];
		Arr[i] = Arr[L-i-1];
		Arr[L-i-1] = pastValue;
		i++;
	}
	
	return Arr;
};