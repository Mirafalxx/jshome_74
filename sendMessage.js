const e = require("express");
const fs = require("fs");
let fileName = new Date()
  .toString()
  .slice(10, 25)
  .replace(/\s/g, "")
  .replace(/\:/g, "-");
const path = "messages";
let data = [];
module.exports = {
  init() {
    const fileContents = fs.readFileSync(`./messages/${fileName}.json`);
    data = JSON.parse(fileContents);
  },
  addItem(item) {
    item.id = fileName;
    data.push(item);
    this.save();
    // fs.writeFileSync(`./messages/${fileName}.json`, text);
  },
  getItems() {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(files.slice(-5));
      }
    });
  },
  save() {
    fs.writeFileSync(
      `./messages/${fileName}.json`,
      JSON.stringify(data, null, 2)
    );
  },
};
