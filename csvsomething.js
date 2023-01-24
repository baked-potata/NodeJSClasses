const { parse } = require("csv-parse");
const fs = require("fs");
const records = [];
const isPrat = (data) => data["last_name"] === "Centini";

fs.createReadStream("./100-contacts.csv")
  .pipe(
    parse({
      columns: true,
    })
  )
  .on("data", (data) => {
    // console.log(data);
    // records.push(data);
    if (isPrat(data)) {
      records.push(data);
      console.log(data);
    }
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    // console.log(`${records.length} : ${JSON.stringify(records)} `);
  });

// console.log(records);
