const express = require('express');
const app = express();

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function(){
    let led = new five.Led(13);
    led.blink(500);
});