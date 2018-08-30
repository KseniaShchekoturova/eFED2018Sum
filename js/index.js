this.window.onload = function() {
    
	var elements_values = document.getElementsByClassName('five-days-table-common__day');
    var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
    var i = 1;
	
    while (i < elements_values.length) {
        elements_values[i].style.display = 'none';
        elements_weekdays[i].style.display = 'none';
        i++;
    }
};

function arr() { 
    
	var elements_values = document.getElementsByClassName('five-days-table-common__day');
    var elements_weekdays = document.getElementsByClassName('five-days-table__one-day');
    var elements_buttons = document.getElementsByClassName('button_weekday');
    var activeButton = document.getElementsByClassName('active')[0];
    var i = 0;
    var indexOfActive = 0;

	// кнопка назад
    if (event.target == document.getElementsByClassName('rotate-previous')[0]) {
        while (i < elements_buttons.length) {
            if (elements_buttons[i] == activeButton) {
                indexOfActive = i - 1;
                break;
            }
            i++;
        }
	// кнопка вперед	
    } else if ( event.target == document.getElementsByClassName('rotate-following')[0]) {
        while (i < elements_buttons.length) {
            if (elements_buttons[i] == activeButton) {
                indexOfActive = i + 1;
                break;
            }
            i++;
        }
	// кнопки по дням недели
    } else if (event.target.parentElement == document.getElementsByClassName('buttons_weekday')[0]) {
        while (i < elements_buttons.length) {
            if (elements_buttons[i] == event.target) {
                indexOfActive = i;
                break;
            }
            i++;
        }
	// другие случаи не интересны
    } else {
        return;
    }

	// замкнем на круг
    if (indexOfActive == -1) {
        indexOfActive = elements_buttons.length - 1;
    } else if (indexOfActive == elements_buttons.length) {
        indexOfActive = 0;
    }

	i = 0;
    while (i < elements_values.length) {
        if (indexOfActive == i) {
            elements_values[i].style.display = '';
            elements_weekdays[i].style.display = '';
            elements_buttons[i].classList.add('active');
        } else {
            elements_values[i].style.display = 'none';
            elements_weekdays[i].style.display = 'none';
            elements_buttons[i].classList.remove('active');
        }
        i++;
    }
}
