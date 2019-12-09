var express = require('express');
var app = express();

var morgan = require('morgan');

////rutas
var rutas = require("./routes");
var api = require("./api");

//settings

app.set("appName", "myFirstServer");
app.set("views", __dirname +"/views");
app.set("view engine", "ejs");



//Middlewares

app.use(morgan("combined"));
app.use(rutas);
app.use("/api",api);

/*app.get("*", (req, res) => {
    res.end("No se encuentra");
});*/

/*app.use(function(req, res, next){
    console.log("request url:"  + req.url);
    next();
});

app.use((req, res, next) =>{
    console.log("paso por esta funcion");
    next();
});*/



app.listen(3000, function(){
    console.log("server funcionando");
    console.log("Nombre de la App  :" + app.get("appName"));
});

