var winston = require("winston");
// 같은 파일의 로그가 생기면 너무 많아지니까 다른 파일로 생성하도록 하기 위함.
var winstonDaily = require("winston-daily-rotate-file");
// 날짜 관련
var moment = require("moment");

// 3개의 외장 모듈

// 현재시간을 넘겨주는 함수
function timeStampFormat() {
  // 현재 시간을 moment 로 알고, format 으로 원하는 형식으로 포맷팅 하는 것임.
  return moment().format("YYYY-MM-DD HH:mm:ss.SSS ZZ");
}

// Logger 객체
//var logger = new winston.Logger({    ->  winston.Logger 이제 안쓰임
var logger = winston.createLogger({
  // 설정 정보
  transports: [
    new winstonDaily({
      name: "info-file",
      filename: "./log/server",
      datePattern: "_yyyy-MM-dd.log",
      colorize: false,
      //파일의 최대 크기
      maxsize: 50000000,
      maxFiles: 1000,
      level: "info",
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,
    }),
    new winston.transports.Console({
      name: "debug-console",
      colorize: true,
      level: "debug",
      showLevel: true,
      json: false,
      timestamp: timeStampFormat,
    }),
  ],
});

logger.debug("디버깅 메세지 입니다");
logger.error("에러 메세지 입니다");
