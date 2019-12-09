const express = require('express');
const app = express();

app.route('/').get((req, res)=>{
    res.send("index page");
});

app.route('/random/:num_inicial/:num_final').get((req, res)=>{
    let num_inicial = parseInt(req.params.num_inicial);
    let num_final = parseInt(req.params.num_final);

    if(isNaN(num_inicial) || isNaN(num_final)){
        res.status(404);
        res.json({
            error: 'Bad Request'
        });

        return;
    }

    let random = Math.floor((Math.random()*(num_final - num_inicial)) + num_inicial);

    
    res.json({"randomNumber":random});
    
});

app.listen(3000, ()=>{
    console.log("Server on port 3000");
});