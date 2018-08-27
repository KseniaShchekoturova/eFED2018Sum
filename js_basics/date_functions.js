// 11.	День и месяц
function getMonthAndWeekDayNames(date){
	var MonthName, MonthNumber = date.getMonth();
	switch(MonthNumber){
		case 0: MonthName = 'January'; break;
		case 1: MonthName = 'February'; break;
		case 2: MonthName = 'March'; break;
		case 3: MonthName = 'April'; break;
		case 4: MonthName = 'May'; break;
		case 5: MonthName = 'June'; break;
		case 6: MonthName = 'July'; break;
		case 7: MonthName = 'August'; break;
		case 8: MonthName = 'September'; break;
		case 9: MonthName = 'October'; break;
		case 10: MonthName = 'November'; break;
		case 11: MonthName = 'December'; break;
	}
	
	var WeekDayName, WeekDayNumber = date.getDay();
	switch(WeekDayNumber){
		case 0: WeekDayName = 'Sunday'; break;
		case 1: WeekDayName = 'Monday'; break;
		case 2: WeekDayName = 'Tuesday'; break;
		case 3: WeekDayName = 'Wednesday'; break;
		case 4: WeekDayName = 'Thursday'; break;
		case 5: WeekDayName = 'Friday'; break;
		case 6: WeekDayName = 'Saturday'; break;
	}
	
	return MonthName + ', ' + WeekDayName;
};

// 12.	Разница в годах
function getDifferenceInYears(startDate, finishDate){
	daysBetween = (finishDate - startDate) / (24*3600*1000);
	yearsBeetween = Math.round(10 * daysBetween / 365) / 10;
	return yearsBeetween;
}