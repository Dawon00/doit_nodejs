//http 모듈
var http = require("http");

//웹서버 객체를 만들어 변수에 할당
var server = http.createServer();

//localhost는 나 자신을 가리킴. ip를 할당함.
var host = "192.168.144.1";
//포트번호 3000
var port = 3000;
//port 번호에서 대기, host 주소, 동시에 접속가능한 클라이언트 수 5만개로 제한
server.listen(port, host, "50000", function () {
  console.log("웹 서버가 실행되었습니다  " + host + ":" + port);
});
