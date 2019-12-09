const restify = require('restify');

const server = restify.createServer();

//settings
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const users ={
    1:{
        name: "jhon",
        lastname: "Carter"
    },
    2:{
        name: "Bruce",
        lastname : "Wayne"
    }
};

//routes

server.get('/user', (req, res) =>{
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(users));
});

//start server

server.listen(3000, ()=>{
    console.log("server on port 3000");
});