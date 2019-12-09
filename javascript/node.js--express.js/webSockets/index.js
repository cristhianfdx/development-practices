const express = require('express');
const path = require('path');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the Server
const server = app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});

//Websockets
const socketIO = require('socket.io');
const io = socketIO(server);


io.on('connection', (socket)=>{

    socket.on('chat:message', data=>{
        io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data);
    });
    
});



