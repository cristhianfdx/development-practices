const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


//Middlewares
function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
        
    if(typeof bearerHeader !== "undefined"){
        
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];        
        req.token = bearerToken;
        next();       
       
    }else{
        res.sendStatus(403);
    }
    
}

//Routes
app.get('/', (req, res)=>{
    res.json({
       test : "Api works" 
    });
});

app.post('/api/login', (req, res) =>{
    const user = {id :3};
    const token = jwt.sign({user}, "secret");
    res.json({token});
});

app.get('/api/protected', ensureToken, (req, res) =>{
    jwt.verify(req.token, 'secret', (err, data)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({text: "protected", data});
        }
    });
    
});


//Server listening
app.listen(3000, ()=>{
    console.log("Server on port 3000");
});