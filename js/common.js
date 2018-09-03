function getIndexOfButton(button, buttonsMass) {
	var i = 0;
	
	while (i < buttonsMass.length) {
		if (buttonsMass[i] == button) {
			return i;
		}
		i++;
	}
	
	return -1;
}

function showOnlyActiveBlock_old(indexOfActive) {
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

function showOnlyActiveBlock(indexOfActive) {
	var i;
	var j;
	
	for (i = 1; i < arguments.length; i++) {
		j = 0;
		elementsMass = arguments[i];
		while (j < elementsMass.length) {
			if (indexOfActive == j) {
				elementsMass[j].style.display = '';
			} else {
				elementsMass[j].style.display = 'none';
			}
			j++;
		}
	}
}

function setActiveClassForButton(indexOfActive, buttonsMass) {
	var i = 0;
	
    while (i < buttonsMass.length) {
        if (indexOfActive == i) {
            buttonsMass[i].classList.add('active');
        } else {
            buttonsMass[i].classList.remove('active');
        }
        i++;
    }
}
