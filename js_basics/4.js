// 4.	Диапазон
function makeArray(elStart, elFinish, step){
	if (elStart == undefined | elFinish == undefined | step == 0){return 'bad options';}
	if(step == undefined){step = 1;}
	
	var Arr = [];	
		
	if(elStart == elFinish){
		Arr.push(elStart);
	}else if(elStart < elFinish){
		if (step < 0){step = -step;}
		while(elStart <= elFinish){
			Arr.push(elStart);
			elStart += step;
		}	
	}else{
		if (step > 0){step = -step;}
		while(elStart >= elFinish){
			Arr.push(elStart);
			elStart += step;
		}	
	}
	
	return Arr;
};