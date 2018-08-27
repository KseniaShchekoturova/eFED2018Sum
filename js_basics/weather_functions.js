// 13.	Погода Anomaly 
function findAnomaly(array, paramName){
	var extremesObject = {
		max: array[0],
		min: array[0]
	};
	
	for (var i = 0; i < array.length; i++){
		if (Number(extremesObject.max[paramName]) < Number(array[i][paramName])){
			extremesObject.max = array[i];
		}
		if (Number(extremesObject.min[paramName]) > Number(array[i][paramName])){
			extremesObject.min = array[i];
		}
	}
	return extremesObject;
}

// 14.	Статистика погоды
function getAverageTemperature(requestData){
	var temperaturesArray = historicalReviewMock[requestData.city][requestData.date.getFullYear()],
		i = 0, totalTemperature = 0;
		
	while (i < 12){
		totalTemperature += temperaturesArray[i].average;
		i++;
	}
	
	return Math.round(totalTemperature / 12);
}