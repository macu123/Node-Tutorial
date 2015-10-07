var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    var parseObj = url.parse(req.url, true);
    var pathName =parseObj.pathname;
    var query_iso = parseObj.query.iso;

    if (pathName === '/api/parsetime') {
      var res_obj = parseTime(query_iso);
      var json_str = JSON.stringify(res_obj);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(json_str);
    }
    else if (pathName === '/api/unixtime') {
      var res_obj = unixTime(query_iso);
      var json_str = JSON.stringify(res_obj);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(json_str);
    }
  }
});

server.listen(process.argv[2]);

function parseTime(query_iso) {
  var time = new Date(query_iso);
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
}

function unixTime(query_iso) {
  var time = new Date(query_iso).getTime();
  return {
    "unixtime": time
  };
}