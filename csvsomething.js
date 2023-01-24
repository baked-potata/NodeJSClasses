const { parse } = require("csv-parse");
const fs = require("fs");
const data = [];

fs.createReadStream("./100-contacts.csv");
