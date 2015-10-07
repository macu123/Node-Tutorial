var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(
    concatStream(
      function (data) {
        var str = data.toString();
        var str_len = str.length;
        console.log(str_len);
        console.log(str);
      }
    )
  );
});