this.window.onload = function() { 
	showHideElements();
}

this.window.onresize = function() {
	showHideElements();
}

function showHideElements() {		
	if (innerWidth >= 1000) {
		showAllWeekdays();
	} else {
		var activeButton = document.querySelector('.active');
		var buttonsMass = document.getElementsByClassName('weekday-one-button');
		var indexOfActive = getIndexOfButton(activeButton, buttonsMass);
		var elements_values = document.getElementsByClassName('five-days-table-common__day');
		var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
		showOnlyActiveBlock(indexOfActive, elements_values, elements_weekdays);
	}
}

function showAllWeekdays() {
	var elements_values = document.getElementsByClassName('five-days-table-common__day');
	var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
	var i = 0;
	
	while (i < elements_values.length) {
		elements_values[i].style.display = '';
		elements_weekdays[i].style.display = '';
		i++;
	}
}

var fiveDaysContainer = document.querySelector('.five-days');

fiveDaysContainer.onclick = function(event) { 
	if (event.target.classList.contains('active')) {
		return;
	}
	
    var indexOfActive;
	var activeButton = document.querySelector('.active');
	var buttonsMass = document.getElementsByClassName('weekday-one-button');

    // кнопка назад
    if (event.target == document.getElementById('rotate-previous')) {
        indexOfActive = getIndexOfButton(activeButton, buttonsMass) - 1;
    // кнопка вперед	
    } else if ( event.target == document.getElementById('rotate-following') ) {
        indexOfActive = getIndexOfButton(activeButton, buttonsMass) + 1;
    // кнопки по дням недели
    } else if (event.target.parentElement == document.getElementById('weekday-buttons')) {
        indexOfActive = getIndexOfButton(event.target, buttonsMass);
    // другой случай
    } else {
        return;
    }

    // замкнем на круг
	var elements_buttons = document.getElementsByClassName('weekday-one-button');
    if (indexOfActive == -1) {
        indexOfActive = elements_buttons.length - 1;
    } else if (indexOfActive == elements_buttons.length) {
        indexOfActive = 0;
    }

	var elements_values = document.getElementsByClassName('five-days-table-common__day');
	var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
	showOnlyActiveBlock(indexOfActive, elements_values, elements_weekdays);
	
	var buttonsMass = document.getElementsByClassName('weekday-one-button');
	setActiveClassForButton(indexOfActive, buttonsMass);
}