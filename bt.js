var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var btPort = "/dev/tty.HC-05-DevB";
var serPort = "/dev/tty.usbmodem1411";
var port = serPort;

var serialPort = new SerialPort(port, {
  parser: serialport.parsers.readline("\n"),
  baudrate: 38400,
  dataBits: 8, 
  parity: 'none', 
  stopBits: 1, 
  flowControl: false 
});

serialPort.on('open', function() {
    serialPort.write("HELP", function(){
    });
    serialPort.on('data', function(data) {
        //console.log('>' + data.toString());
        var splitted = data.toString().split(" ");
        console.log('>' + splitted);
        console.log('H>' + splitted[2]);
        console.log('T>' + splitted[3]);
    });
});


/*
function serialListener()
{
    var receivedData = "";
    serialPort = new SerialPort("/dev/tty.HC-05-DevB", {
        baudrate: 38400,
        // defaults for Arduino serial communication
         dataBits: 8, 
         parity: 'none', 
         stopBits: 1, 
         flowControl: false 
    });
 
    serialPort.on("open", function () {
      console.log('open serial communication');
         // Listens to incoming data
        serialPort.on('data', function(data) { 
             receivedData += data.toString();
          if (receivedData .indexOf('E') >= 0 && receivedData .indexOf('B') >= 0) {
         // save the data between 'B' and 'E'
           sendData = receivedData .substring(receivedData .indexOf('B') + 1, receivedData .indexOf('E'));
           receivedData = '';
         }
         // send the incoming data to browser with websockets.
       socketServer.emit('update', sendData);
      });  
    });  
}
*/