var fs = require("fs");

// 'w' 는 쓰기 권한
// 정상적으로 열리면 콜백함수가 실행됨.
fs.open("./output.txt", "w", function (err, fd) {
  if (err) {
    console.log("파일 오픈시 에러 발생");
    console.dir(err);
    return;
  }
  // 에러가 없다면 실행될 코드.
  // buffer 에 입력해서 전달함.
  var buf = new Buffer("안녕\n");
  // index 값 0부터 buf.length 만큼 출력하겠다(모두 출력하겠다는 의미)
  fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
    if (err) {
      console.log("파일 쓰기 시 에러 발생");
      console.dir(err);
      return;
    }
    console.log("파일 쓰기 완료함");
    fs.close(fd, function () {
      console.log("파일 닫기 완료함");
    });
  });
});
