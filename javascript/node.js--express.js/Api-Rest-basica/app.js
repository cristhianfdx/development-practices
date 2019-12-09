const express = require('express');
const app = express();

app.route('/').get(function(req, res){
    res.send("Recibido");
});

app.route('/').post(function(req, res){
    res.send('...Guardando');
});

app.route('/').put(function(req, res){
    res.send('...Editando');
});

app.route('/').delete(function(req, res){
    res.send('...Borrando');
});

app.listen(3000, function(){
    console.log("server listen on port 3000");
});