var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, extension, callBack) {
  fs.readdir(directoryName, function(err, files) {
    if (err) {
      return callBack(err);
    }

    var files_filtered = files.filter(function(file) {
      return path.extname(file) === '.' + extension;
    });

    callBack(null, files_filtered);
  });
};