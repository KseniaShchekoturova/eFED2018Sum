this.window.onload = function() { 
	showHideElements();
}

this.window.onresize = function() {
	showHideElements();
}

function showHideElements() {	
	
	if (innerWidth >= 1000) {
		var elements_values = document.getElementsByClassName('five-days-table-common__day');
		var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
		var i = 0;
		
		while (i < elements_values.length) {
			elements_values[i].style.display = '';
			elements_weekdays[i].style.display = '';
			i++;
		}
	} else {
		var activeButton = document.querySelector('.active');
		var indexOfActive = getIndexOfButton(activeButton);
		setDisplayForWeekdays(indexOfActive);
	}
}

var fiveDaysContainer = document.querySelector('.five-days');

fiveDaysContainer.onclick = function(event) { 
	if (event.target.classList.contains('active')) {
		return;
	}
	
    var indexOfActive = 0;
	var activeButton = document.querySelector('.active');

    // кнопка назад
    if (event.target == document.getElementById('rotate-previous')) {
        indexOfActive = getIndexOfButton(activeButton) - 1;
    // кнопка вперед	
    } else if ( event.target == document.getElementById('rotate-following') ) {
        indexOfActive = getIndexOfButton(activeButton) + 1;
    // кнопки по дням недели
    } else if (event.target.parentElement == document.getElementById('weekday-buttons')) {
        indexOfActive = getIndexOfButton(event.target);
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

	setDisplayForWeekdays(indexOfActive);
	setActiveClassForButton(indexOfActive);
}

function getIndexOfButton(button) {
	var elements_buttons = document.getElementsByClassName('weekday-one-button');
	var i = 0;
	
	while (i < elements_buttons.length) {
		if (elements_buttons[i] == button) {
			return i;
		}
		i++;
	}
	
	return -1;
}

function setDisplayForWeekdays(indexOfActive) {
	var elements_values = document.getElementsByClassName('five-days-table-common__day');
    var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
    var i = 0;
	
    while (i < elements_values.length) {
        if (indexOfActive == i) {
            elements_values[i].style.display = '';
            elements_weekdays[i].style.display = '';
        } else {
            elements_values[i].style.display = 'none';
            elements_weekdays[i].style.display = 'none';
        }
        i++;
    }
}
function setActiveClassForButton(indexOfActive) {
	var elements_buttons = document.getElementsByClassName('weekday-one-button');
    var i = 0;
	
    while (i < elements_buttons.length) {
        if (indexOfActive == i) {
            elements_buttons[i].classList.add('active');
        } else {
            elements_buttons[i].classList.remove('active');
        }
        i++;
    }
}