var weatherCharacteristicsContainer = document.getElementById('weather-characteristics-buttons');

weatherCharacteristicsContainer.onclick = function(event) {
	var buttonsMass = document.getElementsByClassName('weather-characteristics-one-button');
	var indexOfActive = getIndexOfButton(event.target, buttonsMass);
	var elements_weatherCharacteristics = document.getElementsByClassName('weather-characteristics__one-characteristic');
	showOnlyActiveBlock(indexOfActive, elements_weatherCharacteristics);
	setActiveClassForButton(indexOfActive, buttonsMass);
}

var elements = document.getElementsByClassName("temperature-bar1");
var i = 0;
while (i < elements.length) {
	//elements[i].style.
	i++;
}

// var xhr = new XMLHttpRequest();

// //xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Izhevsk,ru&APPID=e2c078e26648e8e09b6e90e982007c80", true); 
// xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Izhevsk,ru&units=metric&APPID=e2c078e26648e8e09b6e90e982007c80`", true); 

// xhr.send(); 

// xhr.onload = function() {
  // console.log(xhr.responseText);
// }

// xhr.onreadystatechange = function() { 

	// if (this.readyState != 4) return; 

	// if (this.status != 200) {
	  // alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')); 
	  // return; 
	// }

	// var txt = xhr.responseText;

	// var ee = JSON.parse(xhr.responseText);

// }; 