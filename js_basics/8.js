// 8.	Повтор
function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw 'MultiplicatorUnitFailure';
  }
};

function multiply(a, b){
	try{
		return multiplyOrThrow(a, b);
	}catch{
		return multiply(a, b);
	}
};