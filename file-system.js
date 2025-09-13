// file-system.js
// This script writes to a file and then reads it

const fs = require("fs");

// Write to welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read from welcome.txt
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
