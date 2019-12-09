const express = require('express');
const path = require('path');
const http = require('http');
const socket_io = require('socket.io');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//WebSockets
const server = http.createServer(app);
const io = socket_io.listen(server);

require('./sockets')(io);

//Server listening
server.listen(app.get('port'), ()=> console.log("Server on port", app.get('port')));







