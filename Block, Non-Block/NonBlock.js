const fs = require('fs');

console.log("Loading Data..");
fs.readFile('./Sample.txt', {encoding: "utf-8"}, (err, Data) => {
    console.log(Data);
});
console.log("Non-Blocking");