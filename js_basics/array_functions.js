// 4.	Диапазон
function getDiapason(start, finish, step) {
  if ((start == undefined) | (finish == undefined) | (step == 0)) {
    return "bad options";
  }

  if (step == undefined) {step = 1;}

  var diapason = [];

  if (start == finish) {
    diapason.push(start);
	return diapason;
  } 
  
  if ((finish - start) * step < 0) {step = -step;}
  
  if (start < finish) {
    while (start <= finish) {
      diapason.push(start);
      start += step;
    }
  } else {
    while (start >= finish) {
      diapason.push(start);
      start += step;
    }
  }
  
  return diapason;
}

// 5.	Наоборот
function reverseArray(array) {
  var i = 0;
  var L = array.length;
  var reversedArray = [];

  while (i < L) {
    reversedArray[i] = array[L - i - 1];
    i++;
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  var i = 0;
  var pastValue;
  var length = array.length;

  while (var i < length / 2) {
    pastValue = array[i];
    array[i] = array[length - i - 1];
    array[length - i - 1] = pastValue;
    i++;
  }

  return array;
}

// 6.	Свертка
function mergeArrays(...arrays) {
  var totalArray = [];
  var mergedArray = [];

  for (var i = 0; i < arrays.length; i++) {
    totalArray = totalArray.concat(arrays[i]);
  }

  for (var i = 0; i < totalArray.length; i++) {
    var item = totalArray[i];
    if (getPositionInArray(mergedArray, item) == -1) {mergedArray.push(item);}
  }

  return mergedArray;
}

function getPositionInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {return i;}
  }

  return -1;
}

// 7.	Every и some
function isEveryNaN(array) {
  for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {return false;}
  }

  return true;
}

function isSomeNaN(array) {
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {return true;}
  }

  return false;
}
