// 11.	День и месяц
function getMonthAndWeekDayNames(date) {
  return getMonthName(date) + ", " + getWeekDayName(date);
}

function getMonthName(date) {
  var MonthName;
  var MonthNumber = date.getMonth();

  switch (MonthNumber) {
    case 0:
      MonthName = "January";
      break;
    case 1:
      MonthName = "February";
      break;
    case 2:
      MonthName = "March";
      break;
    case 3:
      MonthName = "April";
      break;
    case 4:
      MonthName = "May";
      break;
    case 5:
      MonthName = "June";
      break;
    case 6:
      MonthName = "July";
      break;
    case 7:
      MonthName = "August";
      break;
    case 8:
      MonthName = "September";
      break;
    case 9:
      MonthName = "October";
      break;
    case 10:
      MonthName = "November";
      break;
    case 11:
      MonthName = "December";
      break;
  }

  return MonthName;
}

function getWeekDayName(date) {
  var WeekDayName;
  var WeekDayNumber = date.getDay();

  switch (WeekDayNumber) {
    case 0:
      WeekDayName = "Sunday";
      break;
    case 1:
      WeekDayName = "Monday";
      break;
    case 2:
      WeekDayName = "Tuesday";
      break;
    case 3:
      WeekDayName = "Wednesday";
      break;
    case 4:
      WeekDayName = "Thursday";
      break;
    case 5:
      WeekDayName = "Friday";
      break;
    case 6:
      WeekDayName = "Saturday";
      break;
  }

  return WeekDayName;
}

// 12.	Разница в годах
function getDifferenceInYears(startDate, finishDate) {
  var millisecondsInDay = 24 * 3600 * 1000;
  var differenceInDays = (finishDate - startDate) / millisecondsInDay;
  var daysInYear = 365;
  var differenceInYears = Math.round((10 * differenceInDays) / daysInYear) / 10;

  return differenceInYears;
}
