const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

//Connections
const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

io.on('connection', function(socket){
    console.log("nuevo socket");
});

app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/index.html');
});

//Serial
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const Parse = new Readline();

const mySerial = new SerialPort('/dev/ttyUSB0', {
    baudRate: 9600
});

mySerial.on('open', function(){
    console.log('Puerto abierto');
});

mySerial.on('data', function(data){
    console.log(data.toString());
    io.emit('arduino:data', {
        value: data.toString()
    });
});

mySerial.on('err', function(err){
    console.error(err.message);
});

server.listen(3000, function(){
    console.log("server on port 3000");
});

