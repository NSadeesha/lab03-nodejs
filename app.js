console.log("Hello from Lab 03!");
console.log("New feature added");
const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});