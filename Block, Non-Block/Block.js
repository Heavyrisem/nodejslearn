const fs = require('fs');


console.log("Loading Data..");
const data = fs.readFileSync('./Sample.txt', "utf-8");
console.log(data);
console.log("Blocked");