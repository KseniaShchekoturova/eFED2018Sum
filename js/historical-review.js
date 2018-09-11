var inputSearch = document.getElementById('search');
inputSearch.addEventListener("keydown", changeCity);

function changeCity(event) {	
    if (event.keyCode != 13) returtn;
	var city = inputSearch.value;
    load(date, city);
}; 

load("Izhevsk");

function load(city) {
    var data = historicalReviewMock[city];
    transform(data);
}

function transform(data) {
    render(data);	 
}

function render(data) {
    var elementsAverageMax = document.getElementsByClassName('year-table__cell_average-max'); 
    var elementsAverageMin = document.getElementsByClassName('year-table__cell_average-min');  
    var elementsRecordMax = document.getElementsByClassName('year-table__cell_record-max'); 
    var elementsRecordMin = document.getElementsByClassName('year-table__cell_record-min');    
    var i = 0;
    while (i < elementsAverageMax.length) {
        elementsAverageMax[i].innerText = data[i].averageMax;
        elementsAverageMin[i].innerText = data[i].averageMin;
        elementsRecordMax[i].innerText = data[i].recordMax;
        elementsRecordMin[i].innerText = data[i].recordMin;
        i++;
    }  
}