import got from "got";
import config from "../config/config.js";
import converageMap from "../config/mapping.js";
import { createArrayCsvWriter as createCsvWriter } from "csv-writer";

export function constructTestResultMap(testReport) {
  const map = {};
  testReport.forEach(({ test_id, result }) => {
    if (test_id) {
      map[test_id] = result;
    }
  });
  return map;
}

export function getSessionIdFromProcessArgv() {
  const sessionArgv = process.argv.find((argv) => argv.startsWith("session="));
  if (!sessionArgv) {
    console.log(
      "Error: Session id required. Run with Node test-report session={session id}"
    );
    process.exit(1);
  }
  const sessionId = sessionArgv.split("=")[1];
  if (!sessionId) {
    console.log("Error: Session id required");
    process.exit(1);
  }
  return sessionId;
}

export function obtainTestReport(sessionId) {
  const url = `${config.baseServerUrl}suites/api/test_sessions/${sessionId}/results`;
  const data = got.get(url).json();
  return data;
}

export function constructCsv(resultMap) {
  const csvWriter = createCsvWriter({
    path: "generated.csv",
  });
  const csvLines = [];
  converageMap.forEach((page) => {
    csvLines.push([`===Page: ${page.name}===`]);
    page.columns.forEach(({ capability, testIds }) => {
      csvLines.push([capability, tested(resultMap, testIds)]);
    });
    // new line between pages
    csvLines.push([]);
  });
  csvWriter.writeRecords(csvLines);
}

function tested(resultMap, testIds) {
  if (
    testIds.length > 0 &&
    testIds.every((id) => {
      return (
        resultMap[id] && (resultMap[id] === "pass" || resultMap[id] === "fail")
      );
    })
  ) {
    return "Tested";
  } else {
    return "Not Tested";
  }
}
