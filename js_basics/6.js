// 6.	Свертка
function mergeArrays(...arrays){
	var TotalArr = [];
	
	for (var i = 0; i < arrays.length; i++){
		TotalArr = TotalArr.concat(arrays[i]);
	}
	
	for (i = 0; i < TotalArr.length; i++){
		if (TotalArr.indexOf(TotalArr[i], i+1) > -1){
			TotalArr.splice(i, 1);
			i--;
		}
	}

	return TotalArr;
};