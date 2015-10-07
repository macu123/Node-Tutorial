var net = require('net');
var server = net.createServer(function(socket) {
  var d = new Date();
  var curr_minute = zeroFill(d.getMinutes());
  var curr_hour = zeroFill(d.getHours());
  var curr_date = zeroFill(d.getDate());
  var curr_month = zeroFill(d.getMonth() + 1); //Months are zero based
  var curr_year = d.getFullYear();
  var time_str = curr_year + "-" + curr_month + "-" + curr_date + " " + curr_hour + ":" + curr_minute;
  socket.end(time_str + '\n');
});

server.listen(process.argv[2]);

function zeroFill(num) {
  return ("0" + num).slice(-2);
}