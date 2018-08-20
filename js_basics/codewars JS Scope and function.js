// http://www.codewars.com/kata/closures-and-scopes - не прошло тесты, но работает в консоли
var callbacks = [];

function createFunctions(num){
  var i = 0; 
  while (i < num){
    var j = i;
	callbacks[i] = function callback(){
	  return j-1;
    };
	console.log(callbacks[i].toString());
	i++;
  }
};     

// http://www.codewars.com/kata/a-function-within-a-function - тесты прйдены на 100%
function always (n) {
  func = function(n){
    return n;
  };
  return func.bind(null,n);
}

// http://www.codewars.com/kata/can-you-keep-a-secret
// http://www.codewars.com/kata/using-closures-to-share-class-state
// http://www.codewars.com/kata/a-chain-adding-function
// http://www.codewars.com/kata/function-cache
// http://www.codewars.com/kata/function-composition
// http://www.codewars.com/kata/function-composition-1
