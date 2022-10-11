//js의 객체는  {} 로 만든다.

var calc = {}; //계산기 객체

calc.add = function (a, b) {
  //a와 b를 받아서 더한 값을 return 함.
  return a + b;
};

console.log("calc.add:" + calc.add(10, 10));
