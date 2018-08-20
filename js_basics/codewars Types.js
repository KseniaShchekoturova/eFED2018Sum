//http://www.codewars.com/kata/opposite-number - тесты пройдены на 100%
function opposite(number) {
  return number - 2*number;
};

//http://www.codewars.com/kata/basic-mathematical-operations - тесты пройдены на 100%
function basicOp(operation, value1, value2){
  return eval(value1+operation+value2);
};


//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters - тесты пройдены на 100%
function printArray(array){
  var index, len, str = '';
  for (index = 0, len = array.length; index < len; ++index) {
      str = str + array[index] + ',';
  }
  return str.substring(0,str.length-1);
};


//http://www.codewars.com/kata/transportation-on-vacation - тесты пройдены на 100%
function rentalCarCost(d) {
  if (d<0){
    return 'need positive value';
  }else if(d<3){
    return d*40;
  }else if((d>=3) & (d<7)){
    return d*40-20;
  }else if(d>=7){
    return d*40-50;
  }else{
    return 'uncorrect value';
  }
};

//http://www.codewars.com/kata/calculating-with-functions - тесты пройдены на 100%
function zero(str) {return common(0,str)};
function one(str) {return common(1,str)};
function two(str) {return common(2,str)};
function three(str) {return common(3,str)};
function four(str) {return common(4,str)};
function five(str) {return common(5,str)};
function six(str) {return common(6,str)};
function seven(str) {return common(7,str)};
function eight(str) {return common(8,str)};
function nine(str) {return common(9,str)};

function common(number,str){
  if (typeof(str)=='undefined'){
    return String(number);
  }else {
    var returnValue = eval(String(number)+str)
	if (returnValue < 1) {
		return 0;
	}else{
		return returnValue;
	}
  }
};

function plus(str) {return '+'+str};
function minus(str) {return '-'+str};
function times(str) {return '*'+str};
function dividedBy(str) {return '/'+str};

//http://www.codewars.com/kata/get-the-middle-character - тесты пройдены на 100%
function getMiddle(s){
  if(s.length%2==0){
    return s.substr(s.length/2-1,2);
  }else{
    return s.substr(Math.trunc(s.length/2),1);
  }
};

//http://www.codewars.com/kata/partition-on


//http://www.codewars.com/kata/word-count - тесты пройдены на 66%
function countWords(str) {
   if (str==''){return 0}
   var arr = str.split(' ');
  var i = 0;
  while (i<arr.length){
    var cleanEl;
    cleanEl = arr[i].replace(' ','');
    //cleanEl = cleanEl.replace('','');
    if (cleanEl == ''){
		  arr.splice(i, 1);  
    }else{
  		i++;
  	}
  }
  return arr.length;
};
