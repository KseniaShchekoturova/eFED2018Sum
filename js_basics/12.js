// 12.	Разница в годах
function differenceInYears(dateStart, dateFinish){
	daysBetween = (dateFinish - dateStart) / (24*3600*1000);
	yearsBeetween = Math.round(10 * daysBetween / 365) / 10;
	return yearsBeetween;
}