var http = require("http");
var fs = require("fs");

var server = http.createServer();

var host = "192.168.144.1";
var port = 3000;
server.listen(port, host, 50000, function () {
  console.log("웹 서버 실행됨");
});

//connection 이라는 이벤트가 발생했을 때 콜백함수를 실행시켜주세요
server.on("connection", function (socket) {
  //socket 이라는 게 만들어짐
  console.log("클라이언트가 접속했습니다.");
});

server.on("request", function (req, res) {
  //클라이언트가 요청하는 객체, 응답하는 객체
  console.log("클라이언트 요청이 들어왔습니다");
  //console.log(req);

  var filename = "house.png";
  //파일을 읽어들임
  fs.readFile(filename, function (err, data) {
    //header 정보 클라이언트 쪽으로 전송
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(data);
    //여기서 전송함
    res.end();
  });
});
