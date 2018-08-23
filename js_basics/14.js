// 14.	Статистика погоды
function weatherStat(obj){
	var array = historicalReviewMock[obj.city][obj.date.getFullYear()],
		i = 0, totalTemp = 0;
	while (i < 12){
		totalTemp += array[i].avearage;
		i++;
	}
	return Math.round(totalTemp / 12);
}