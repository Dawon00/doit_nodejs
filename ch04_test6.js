var fs = require("fs");

// 리턴되는 값은 없고 콜백함수로 데이터를 던져준다.
fs.readFile("./package.json", "utf-8", function (err, data) {
  console.log(data);
}); //비동기 방식
