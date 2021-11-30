import { extname, basename } from "path";
import { existsSync, writeFile as _writeFile, readFileSync } from "fs";
import { max as _max } from "simple-statistics";

import { getJsonFromCsv } from "convert-csv-to-json";

const filePath = process.argv[2] ? process.argv[2] : "";
const columnName = process.argv[3] ? process.argv[3] : "";
let json;

if (!existsSync(filePath)) {
  console.log("File does not exists");
} else {
  if (extname(filePath) === ".csv") {
    console.log(basename(filePath));
    json = getJsonFromCsv(filePath);
    json.forEach((element, index) => {
      if (checkLine(Object.values(element))) {
        json.splice(index, 1);
      }
    });
    max(columnName);
  } else {
    console.log("Erreur de path");
  }
}

function writeFile(nameFile, columnName, data) {
  _writeFile(`statistique_${nameFile}_${columnName}.txt`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(
        readFileSync(`statistique_${nameFile}_${columnName}.txt`, "utf8")
      );
    }
  });
}

function max(columnName) {
  let tab = [];
  for (let element of json) {
    tab.push(parseInt(element[columnName]));
  }
  const data = `Max ${columnName} : ${_max(tab)}`;
  const nameFile = "max";
  console.log(data);
  writeFile(nameFile, columnName, data);
}

function checkLine(line) {
  tab = ["String", "Float", "Int", "Categorical"];
  for (let element of line) {
    if (tab.includes(element)) {
      return true;
    }
  }
  return false;
}
