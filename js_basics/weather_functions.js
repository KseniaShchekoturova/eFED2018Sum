// 13.	Погода Anomaly
function findAnomaly(array, paramName) {
  var maxValue;
  var minValue;
  var currentValue;
  var extremesObject = {
    max: array[0],
    min: array[0]
  };

  for (var i = 0; i < array.length; i++) {
    maxValue = Number(extremesObject.max[paramName]);
    currentValue = Number(array[i][paramName]);
    if (maxValue < currentValue) {
      extremesObject.max = currentValue;
    }
  }

  for (var i = 0; i < array.length; i++) {
    minValue = Number(extremesObject.min[paramName]);
    currentValue = Number(array[i][paramName]);
    if (minValue > currentValue) {
      extremesObject.min = currentValue;
    }
  }

  return extremesObject;
}

// 14.	Статистика погоды
function getAverageTemperature(requestData) {
  var i = 0;
  var totalTemperature = 0;
  var year = requestData.date.getFullYear();
  var temperaturesArray = historicalReviewMock[requestData.city][year];

  while (i < 12) {
    totalTemperature += temperaturesArray[i].average;
    i++;
  }

  return Math.round(totalTemperature / 12);
}
