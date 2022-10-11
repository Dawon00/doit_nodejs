var express = require("express");
var http = require("http");

//app은 express 서버 객체가 된다.
var app = express();
//port 라는 속성임. 환경변수에 들어간 PORT 정보를 사용해라. 없으면 3000 쓰기.
app.set("port", process.env.PORT || 3000);

//express 로 웹 서버 만들기
var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("express 로 웹 서버를 실행함 : " + app.get("port"));
});
