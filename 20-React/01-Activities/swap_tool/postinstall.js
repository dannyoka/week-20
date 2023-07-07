// script to run after installation

const fs = require("fs");
const Os = require("os");

function isWindows() {  
  return Os.platform() === 'win32'
}

try {
  if (isWindows()) {
    fs.chmodSync("./app.js", "666");
    console.log("Windows read and write permissions set");
  } else {
    fs.chmodSync("./app.js", "755");
    console.log("Executable permissions set");
  } 
} catch (err) {
  console.error(err);
}
