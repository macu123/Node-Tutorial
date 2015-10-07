var fs = require('fs');
var file_path = process.argv[2];
var str = fs.readFileSync(file_path).toString();
var number_newline = str.split('\n').length - 1;

console.log(number_newline);