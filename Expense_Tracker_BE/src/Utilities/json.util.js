const fs = require("fs");

const ReadJson = (filepath) => {
  try {
    const readFile = fs.readFileSync(filepath);
    const parseData = JSON.parse(readFile);
    return parseData;
  } catch (error) {
    console.log("error occured in read file:", error);
    return false;
  }
};

module.exports = { ReadJson };
