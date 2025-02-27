import {
  obtainTestReport,
  getSessionIdFromProcessArgv,
  constructTestResultMap,
  constructCsv,
} from "./lib/lib.js";

const sessionid = getSessionIdFromProcessArgv(process);
const report = await obtainTestReport(sessionid);
const map = constructTestResultMap(report);
constructCsv(map);
console.log("Don't forget to open generated.csv and copypasta to workbook.");
