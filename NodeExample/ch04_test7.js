var fs = require("fs");

// output.txt 에 Hello 쓰기
fs.writeFile("./output.txt", "Hello", function (err) {
  if (err) {
    console.log("에러 발생");
    console.dir(err);
    return;
  }
  // error 발생하지 않는 경우
  console.log("output.txt 파일에 데이터 쓰기 완료함");
});
