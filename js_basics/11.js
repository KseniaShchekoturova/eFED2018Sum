// 11.	День и месяц
function getNames(date){
	//dateStr = date.toString();
	//var arr = dateStr.split(' ');
	//return arr[1] + ', ' + arr[0];
	
	var Month;
	switch(date.getMonth()){
		case 0:Month = 'January';break;
		case 1:Month = 'February';break;
		case 2:Month = 'March';break;
		case 3:Month = 'April';break;
		case 4:Month = 'May';break;
		case 5:Month = 'June';break;
		case 6:Month = 'July';break;
		case 7:Month = 'August';break;
		case 8:Month = 'September';break;
		case 9:Month = 'October';break;
		case 10:Month = 'November';break;
		case 11:Month = 'December';break;
	}
	
	var WeekDay;
	switch(date.getDay()){
		case 0:WeekDay = 'Sunday';break;
		case 1:WeekDay = 'Monday';break;
		case 2:WeekDay = 'Tuesday';break;
		case 3:WeekDay = 'Wednesday';break;
		case 4:WeekDay = 'Thursday';break;
		case 5:WeekDay = 'Friday';break;
		case 6:WeekDay = 'Saturday';break;
	}
	
	return Month + ', ' + WeekDay;
};
