/*
var os = require('os');

console.log("HOSTNAME : "+os.hostname());
console.log("Plataforma : "+os.platform());
console.log("Release : "+os.release());
console.log("memoria libre :" + os.freemem()/1000000000 +" GB");
console.log("memoria total :" + os.totalmem()/1000000000 +" GB");

*/

/* crear archivo
const fs = require('fs');

fs.writeFile("./texto.txt", "Linea 1", function(err){
        if(err){
            console.log(err);
        }
        console.log("Archivo creado");
});
*/

//leer archivo

/*
const fs = require('fs');

fs.readFile("./texto.txt", function(err, data){
    if(err){
        console.log("error: " + err);
    }else if(data){
        console.log("Datos :" + data.toString());
    }
});

*/

/*

//Crear servidores
const color = require('colors');
var http = require('http');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('<h1>Hola mundo desde node.js</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log("Server on port 3000".yellow);
});

*/

//Usando express

var express = require('express');
var server = express();

server.get('/', function(req, res){
    res.send("Hola mundo con express");
    res.end();
});

server.listen(3000, () =>{
    console.log("Server on port 3000");
});



