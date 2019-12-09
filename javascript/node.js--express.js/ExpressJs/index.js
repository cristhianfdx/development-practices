//Servidor con node js
/*
const http = require('http');
const server = http.createServer((req, res)=>{
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(3000, ()=>{
    console.log("Server on port 3000");
});
*/

//Servidor con Express
const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');

//Settings

app.set('appName', 'Crash App');
app.set('port', 3000);
app.set('view engine', 'ejs');

//Middlewares

function logger(req, res, next){
    console.log(`Route : ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(morgan('dev'));
//app.use(logger);

/*
app.all('/user', (req, res, next)=>{
    console.log("Por aqui paso");
    next();
});
*/

//Routes

app.get('/', (req, res)=>{
    const data = [{name: "Cristhian"}, {name: "Carlos"}, {name: "Luis"}];
    res.render('index.ejs', {data});
});

app.get('/user', (req, res)=>{
    res.json({
        name : "Cristhian",
        lastname: "Forero"
    });
});

app.get('/about', (req, res)=>{
    res.send("About page");
});

app.post('/', (req, res)=>{
    res.send("POST PETITION");
});

app.put('/', (req, res)=>{
    res.send("PUT PETITION");
});

app.delete('/', (req, res)=>{
    res.send("DELETE PETITION");
});

app.use(express.static(path.join(__dirname , 'public')));


app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log("Server on port", app.get('port'));
});