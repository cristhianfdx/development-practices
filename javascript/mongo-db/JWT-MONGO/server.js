const express = require('express');
const morgan = require('morgan');

const config = require("./config");
const User = require('./app/models/User');
const apiRoutes = require('./api'); 

const app = express();

//settings
const port = process.env.PORT || 3000;
app.set('superSecret', config.secret);

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.get('/', (req, res)=>{
    res.send("API with JSONWenToken");
});

app.get('/setup', (req, res)=>{
    const testUser = new User({
        name: 'Crash',
        password: '123456',
        admin: true
    });

    testUser.save((err)=>{
        if (err) throw err;
        console.log("User saved sucessfully");
        res.json({
            success: true
        });
    });
});

//api
app.use('/api', apiRoutes);

//Server
app.listen(3000, ()=>{
    console.log('server on port 3000');
});