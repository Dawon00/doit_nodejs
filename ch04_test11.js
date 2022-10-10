var fs = require("fs");

// 읽어들이기
// 읽기 권한이 있도록
var infile = fs.createReadStream("./output.txt", { flags: "r" });

// data 라고 하는 이벤트를 on 으로 받는다.
infile.on("data", function (data) {
  console.log("읽어들인 데이터 : " + data);
});

// end 라고 하는 이벤트도 발생함.
infile.on("end", function () {
  console.log("읽기 종료");
});
