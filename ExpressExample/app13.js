var express = require("express");
var http = require("http");
var static = require("serve-static");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");
var multer = require("multer");
var fs = require("fs");
var cors = require("cors");
const express = require("express");

var app = express();

app.set("port", process.env.PORT || 3000);
app.use("/public", static(path.join(__dirname, "public")));
app.use("/uploads", static(path.josin(__dirname, "uploads")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  expressSession({
    //추가
    secret: "my key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cors());
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads");
  },
  filename: function (req, file, callback) {
    //callback(null, file.originalname + Date.now())
    var extension = path.extname(file.originalname);
    var basename = path.basename(file.originalname, extension);
    callback(null, basename + Date.now(+extension));
  },
});

var uploads = multer({
  storage: storage,
  limits: {
    files: 10,
    fileSize: 1024 * 1024 * 1024,
  },
});

var router = express.Router();

router.route("/process/product").get(function (req, res) {
  console.log("/process/product 라우팅 함수 호출됨");

  if (req.session.user) {
    res.redirect("/public/product.html");
  } else {
    res.redirect("/public/login2.html");
  }
});

router.route("/process/login").post(function (req, res) {
  console.log("/process/login 라우팅 함수 호출됨");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.paramPassword || req.query.paramPassword;
  console.log("요청 파라미터 : " + paramId + ", " + paramPassword);

  if (req.session.user) {
    console.log("이미 로그인 되어 있습니다");
    res.redirect("/public/product.html");
  } else {
    req.session.user = {
      id: paramId,
      name: "소녀시대",
      authorized: true,
    };
    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
    res.write("<h1>로그인 성공</h1>");
    res.write("<p>id: " + paramId + "</p>");
    res.write('<br><a href="/process/product">상품 페이지로 이동하기</a>');
    res.end();
  }
});

router.route("/process/logout").get(function (req, res) {
  if (req.session.user) {
    console.log("로그아웃 합니다");
    req.session.destroy(function (err) {
      if (err) {
        console.log("세션 삭제 시 에러발생");
      }
      console.log("세션 삭제 성공");
      res.redirect("/public/login2.html");
    });
  } else {
    console.log("로그인 되어있지 않습니다");
    req.redirect("/public/login2.html");
  }
});

router.route("/process/setUserCookie").get(function (req, res) {
  console.log("/process/setUserCookie 라우팅 함수 호출됨");
  res.cookie("user", {
    id: "mike",
    name: "소녀시대",
    authorized: true,
  });
  res.redirect("/process/showCookie");
});

router.route("/process/showCookie").get(function (req, res) {
  console.log("/process/showCooke  라우팅 함수 호출됨");
  res.send(req.cookies);
});

router.route("/process/login").post(function (req, res) {
  console.log("/process/login 라우팅 함수에서 받음.");
  var paramId = req.body.id || req.query.id;
  var password = req.body.password || req.query.password;

  res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>서버에서 로그인 응답</h1>");
  res.write("<div><p>" + paramId + "</p></div>");
  res.write("<div><p>" + password + "</p></div>");
  res.end();
});

app.use("/", router);
app.all("*", function (req, res) {
  res.status(404).send("<h1>요청하신 페이지가 없습니다.</h1>");
});

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
