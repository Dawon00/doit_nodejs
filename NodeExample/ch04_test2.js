// process 라고 하는 전역 객체를 사용
process.on("exit", function () {
  //exit 이라는 이벤트를 받으면 다음 익명 함수에서 처리하겠다.
  console.log("exit 이벤트 발생");
});

setTimeout(function () {
  console.log("2초 후에 실행되었음");
  process.exit();
}, 2000); // 2초 후에 함수를 실행하도록 함

console.log("2초 후에 실행될것임");
