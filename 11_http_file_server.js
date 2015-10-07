var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(res);
  res.end;
});

server.listen(process.argv[2]);