var output = "안녕!";

// 길이가 10인 buffer
var buffer1 = new Buffer(10);

// output 변수에 들어있는 문자열이 bufffer1 에 쓰이게 됨.
// return 되는 값은 몇 개를 write 했는지
var len = buffer1.write(output, "utf-8");

console.log("버퍼에 쓰인 문자열의 길이 : " + len);
console.log("첫번째 버퍼에 쓰인 문자열 : " + buffer1.toString());

console.log("버퍼 객체인지 여부 : " + Buffer.isBuffer(buffer1));

// 길이 값이 리턴됨
var byteLen = Buffer.byteLength(buffer1);
console.log("byteLen : " + byteLen);

// 한글은 3bytpe 씩. '안녕!' 에서 '안녕' 만 str1 에 넣어보자.
var str1 = buffer1.toString("utf8", 0, 6);
console.log("str1 : " + str1);

// buffer 객체 만들기
var buffer2 = Buffer.from("Hello", "utf8");
console.log("두번째 머퍼의 길이 : " + Buffer.byteLength(buffer2));

var str2 = buffer2.toString("utf8", 0, Buffer.byteLength(buffer2));
console.log("str2 : " + str2);
