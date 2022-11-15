var express = require("express");
var http = require("http");

//app은 express 서버 객체가 된다.
var app = express();
//port 라는 속성임. 환경변수에 들어간 PORT 정보를 사용해라. 없으면 3000 쓰기.
app.set("port", process.env.PORT || 3000);

//미들웨어 등록
app.use(function (req, res, next) {
  console.log("첫번째 미들웨어 호출됨");

  req.user = "dawon";

  next(); //미들웨어를 떠나게 됨. 다음 미들웨어가 요청을 받아 처리함.
});

app.use(function (req, res, next) {
  console.log("두번째 미들웨어 호출됨");

  var person = { name: "소녀시대", age: 20 };
  //전송
  //res.send(person);
  var personStr = JSON.stringify(person);
  //res.send(personStr);
  res.writeHead(200, { "Content-Type": "application/json;charset=utf8" });
  res.write(personStr);
  res.end();
});

//express 로 웹 서버 만들기
var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("express 로 웹 서버를 실행함 : " + app.get("port"));
});
