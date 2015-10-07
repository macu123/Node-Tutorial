var my_module = require('./06_my_module.js');
var directoyName = process.argv[2];
var extension = process.argv[3];
my_module(
  directoyName,
  extension,
  function(err, data) {
    if (err) {
      return console.error("There is error:", err);
    }

    for (var i=0; i < data.length; i++) {
      console.log(data[i]);
    }
  });