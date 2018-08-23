// 7.	Every и some
function everyIsNaN(Arr){
	for (var i = 0; i < Arr.length; i++){
		if (!isNaN(Arr[i])){
			return false;
		}
	}
	return true;
};

function someIsNaN(Arr){
	for (var i = 0; i < Arr.length; i++){
		if (isNaN(Arr[i])){
			return true;
		}
	}
	return false;
};