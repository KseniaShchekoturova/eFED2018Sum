var weatherCharacteristicsContainer = document.getElementById('weather-characteristics-buttons');

weatherCharacteristicsContainer.onclick = function(event) {
	var buttonsMass = document.getElementsByClassName('weather-characteristics-one-button');
	var indexOfActive = getIndexOfButton(event.target, buttonsMass);
	var elements_weatherCharacteristics = document.getElementsByClassName('weather-characteristics__one-characteristic');
	showOnlyActiveBlock(indexOfActive, elements_weatherCharacteristics);
	setActiveClassForButton(indexOfActive, buttonsMass);
}