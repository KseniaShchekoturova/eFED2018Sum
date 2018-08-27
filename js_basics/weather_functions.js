// 13.	Погода Anomaly 
function findAnomaly(array, paramName) {
	
	var maxValue, minValue, currentValue, 
		extremesObject = {
			max: array[0],
			min: array[0]
		};
	
	for (var i = 0; i < array.length; i++) {
		maxValue = Number(extremesObject.max[paramName]);
		minValue = Number(extremesObject.min[paramName]);
		currentValue = Number(array[i][paramName]);
		
		if (maxValue < currentValue) extremesObject.max = array[i];
		
		if (minValue > currentValue) extremesObject.min = array[i];
	}
	
	return extremesObject;
}

// 14.	Статистика погоды
function getAverageTemperature(requestData) {
	
	var i = 0, totalTemperature = 0,
		year = requestData.date.getFullYear(),
		temperaturesArray = historicalReviewMock[requestData.city][year];
		
	while (i < 12) {
		totalTemperature += temperaturesArray[i].average;
		i++;
	}
	
	return Math.round(totalTemperature / 12);
}