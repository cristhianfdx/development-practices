const VirtualSerialPort = require('udp-serial').SerialPort;
const firmata = require('firmata');
const five = require('johnny-five');


const sp = new VirtualSerialPort({
    host: '192.168.0.7',
    port : process.env.PORT
});

const io = new firmata.Board(sp);

io.once('ready', function(){
    console.log('IO ready');
    io.isReady = true;

    const board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
        console.log('five ready');
        let led = new five.Led(13);
        led.blink(500);
    });
});

