// 2.	Глубокое сравнение
function areEquaInContent(value1, value2) {
  if (typeof value1 != typeof value2) {return false;}

  if (typeof value1 != "object") {return value1 === value2;}

  // далее для объектов
  if (Object.keys(value1).length != Object.keys(value2).length) {
    return false;
  }

  try {
    for (var key in value1) {
      if (!areEquaInContent(value1[key], value2[key])) {return false;}
    }
  } catch (err) {
    return false;
  }

  return true;
}