// http://www.codewars.com/kata/closures-and-scopes - тесты прйдены на 100%
function createFunctions(n) {
  var callbacks = [];
  
  var func = function(i){
    return i;
  };
  
  for (var i=0; i<n; i++) {
    callbacks.push(func.bind(undefined,i));
  }
  
  return callbacks;
}

// http://www.codewars.com/kata/a-function-within-a-function - тесты прйдены на 100%
function always (n) {
  func = function(n){
    return n;
  };
  return func.bind(null,n);
}

// http://www.codewars.com/kata/can-you-keep-a-secret - тесты прйдены на 100%
function createSecretHolder(secret) {
  var secretValue = secret;
  return{
    setSecret: (value) => secretValue = value,
    getSecret: () => secretValue
  }
}

// http://www.codewars.com/kata/using-closures-to-share-class-state - тесты прйдены на 100%
var Cat = (function () {
	var count = 0, totalWeight = 0;

	const addWeight = (weight) => {
		count++;
		totalWeight += weight;
	};

	var result = function(name, weight){
		if ((typeof name == 'undefined')||(typeof weight == 'undefined')){throw 'undefined';}
		
		this.name = name;
		addWeight(weight);
		var _weight = weight;

		Object.defineProperty(this, 'weight', {
			get: function(){return _weight;},
			set: function(value){
				totalWeight = totalWeight - _weight + value;
				_weight = value;
			}
		});
	}
	
	result.averageWeight = function(){return totalWeight / count;}
	return result;
}());

// http://www.codewars.com/kata/a-chain-adding-function
// http://www.codewars.com/kata/function-cache
// http://www.codewars.com/kata/function-composition
// http://www.codewars.com/kata/function-composition-1
