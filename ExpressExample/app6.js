var express = require("express");
var http = require("http");

//app은 express 서버 객체가 된다.
var app = express();
//port 라는 속성임. 환경변수에 들어간 PORT 정보를 사용해라. 없으면 3000 쓰기.
app.set("port", process.env.PORT || 3000);

//미들웨어 등록
app.use(function (req, res, next) {
  console.log("첫번째 미들웨어 호출됨");

  var userAgent = req.header("User-Agent");
  var paramName = req.query.name;

  res.send(
    "<h3>서버에서 응답. User-Agent -> " +
      userAgent +
      "</h3> <h3>Param Name -> " +
      paramName +
      "</h3>"
  );
});

//express 로 웹 서버 만들기
var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("express 로 웹 서버를 실행함 : " + app.get("port"));
});
