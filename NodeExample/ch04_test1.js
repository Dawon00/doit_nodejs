var url = require("url");

//클라이언트에서 웹서버로 요청한 정보
var urlStr =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=nodejs";

//현재 url 객체
var curUrl = url.parse(urlStr);
console.dir(curUrl);

//query 라는 속성을 확인
console.log("query -> " + curUrl.query);

//curUrl 객체를 format 파라미터로 전달해서 curStr에 문자열을 넣는다.
var curStr = url.format(curUrl);
console.log("url -> " + curStr);

//query 라는 속성에서 검색어만 뽑아내기
//querystring 라는 모듈 사용
var querystring = require("querystring");
var params = querystring.parse(curUrl.query);
console.log("검색어 : " + params.query);
