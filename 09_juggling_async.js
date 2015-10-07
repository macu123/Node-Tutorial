var http = require('http');
var concatStream = require('concat-stream');
var contents_obj = {};
var count = 0;

for (var i=0; i < 3; i++) {
  httpGet(i);
}

function httpGet(num) {
  http.get(process.argv[2 + num], function(response) {
    response.pipe(
      concatStream(
        function (data) {
          var str = data.toString();
          contents_obj[num] = str;
          count++;
          if (count === 3) {
            printResult(contents_obj);
          }
        }
      )
    );
  });
}

function printResult(contents_obj) {
  for (var i=0; i < 3; i++) {
    console.log(contents_obj[i]);
  }
}