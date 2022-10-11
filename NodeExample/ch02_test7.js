var os = require("os"); //os라고 하는 모듈 사용
//host나 memory 여유량 등..

console.log("hostname:" + os.hostname());
console.log("memory: " + os.freemem());
