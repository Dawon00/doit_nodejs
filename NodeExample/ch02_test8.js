var path = require("path"); //path 내장모듈
//파일의 path 확인할 때 사용
var directories = ["Users", "Mars", "docs"];
var dirStr = directories.join(); //문자열로 붙어서 출력이 됨.
console.log("dir: " + dirStr);

var dirStr2 = directories.join(path.sep);
console.log("dir2: " + dirStr2);

var filepath3 = path.join("/Users/Mars", "notepad.exe");
console.log("filepath3: " + filepath3);

var dirname = path.dirname(filepath3);
console.log("dirname: " + dirname);
path.basename(filepath3);
