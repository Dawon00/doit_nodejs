var express = require("express");
var http = require("http");
var static = require("serve-static");
var path = require("path");
var bodyParser = require("body-parser"); //추가
var app = express();

app.set("port", process.env.PORT || 3000);
app.use("/public", static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log("첫번째 미들웨어 호출됨");

  var userAgent = req.header("User-Agent");
  var paramId = req.body.id || req.query.id; // id로 수정

  res.send(
    "<h3>서버에서 응답. User-Agent -> " +
      userAgent +
      "</h3> <h3>Param Name -> " +
      paramId +
      "</h3>"
  );
});

//express 로 웹 서버 만들기
var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("express 로 웹 서버를 실행함 : " + app.get("port"));
});
