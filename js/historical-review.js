var date = new Date(2016, 0);

var inputSearch = document.getElementById('search');
inputSearch.addEventListener("keydown", changeCity);

function changeCity(event) {	
    if (event.keyCode != 13) returtn;
	var city = inputSearch.value;
    load(date, city);
}; 

load("Izhevsk", date);

function load(city, date) {
    var year = date.getFullYear();
    var data = historicalReviewMock[city][year];
    transform(data);
}

function transform(data) {
    render(data);	 
}

function render(data) {
    var elements1 = document.getElementsByClassName('year-table__cell_first-line'); 
    var elements2 = document.getElementsByClassName('year-table__cell_second-line');  
    var elements3 = document.getElementsByClassName('year-table__cell_third-line'); 
    var elements4 = document.getElementsByClassName('year-table__cell_forth-line');    
    var i = 0;
    while (i < elements1.length) {
        elements1[i].innerText = data[i].max - 1;
        elements2[i].innerText = data[i].min + 1;
        elements3[i].innerText = data[i].max;
        elements4[i].innerText = data[i].min;
        i++;
    }  
}