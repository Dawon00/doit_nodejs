var person1 = { name: "소녀시대", age: 20 };
var person2 = { name: "걸스데이", age: 21 };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//속성 추가
Person.prototype.walk = function (speed) {
  console.log(speed + "km 속도로 걸어갑니다.");
};

// 객체 생성
var person3 = new Person("소녀시대", 20);
var person4 = new Person("다원", 23);

//함수 실행
person3.walk(10);
