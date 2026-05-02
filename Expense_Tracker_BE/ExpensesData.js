const { defFilePath } = require("./src/Constants/defFilePath");
const { ReadJson } = require("./src/Utilities/json.util");

const Expenses = ReadJson(defFilePath);

module.exports = { Expenses };
