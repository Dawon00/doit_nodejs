var fs = require("fs"); //fs 모듈 사용(file system 의 줄임말)

var data = fs.readFileSync("./package.json", "utf-8"); //utf-8 인코딩
console.log(data); // 파일이 그대로 출력됨.
