var fs = require('fs');
var file_path = process.argv[2];
fs.readFile(file_path, function(err, data) {
  var str = data.toString();
  var num_newline = str.split('\n').length - 1;
  console.log(num_newline);
});