process.on("tick", function (count) {
  console.log("tick 이벤트 발생 : " + count);
}); //tick 이라는 이벤트 정의

setTimeout(function () {
  console.log("2초 뒤에 실행되었음");
  // emit 이라는 메소드를 호춣함
  // tick 이라는 이벤트를 발생시키고 '2'라는 문자열을 전달함.
  process.emit("tick", "2");
}, 2000);

//이벤트는 emit 으로 보내고 on으로 받는다의 예시
