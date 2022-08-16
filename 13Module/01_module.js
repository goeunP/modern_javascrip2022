// module(export & import)의 이해

import log, { _, getTime, getCurrentHour, MyLogger } from "./myLogger.js";

log("my first test data");
log(`getTime is ${getTime()}`);
log(`current hour is ${getCurrentHour()}`);

const logger = new MyLogger();
log(logger.getLectures());
