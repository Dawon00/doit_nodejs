// events라고 하는 이벤트가 있고, 그 안에 EventEmitter 가 속성으로 들어가 있음
var EventEmitter = require("events").EventEmitter;
//util 모듈을 추가로 불러옴. 프로토타입 객체를 쉽게 상속하기 위함임
var util = require("util");

var Calc = function () {
  //Calc 객체 정의

  //stop 이라는 이벤트가 발생했을 때 함수를 실행해주세요
  this.on("stop", function () {
    console.log("Calc 에 stop 이벤트 전달됨");
  });
};

util.inherits(Calc, EventEmitter);

//Calc 가 프로토타입 객체로 만들어져야 함
Calc.prototype.add = function (a, b) {
  return a + b;
};

module.exports = Calc;
