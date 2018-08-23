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