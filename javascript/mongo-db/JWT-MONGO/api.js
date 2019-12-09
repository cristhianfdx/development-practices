const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./app/models/User');


router.post('/authenticate', (req, res)=>{
    User.findOne({
        name: req.body.name
    }).then((user)=>{
        if(!user){
            res.json({
                success : false,
                message : "Authentication failed --user no find"
            })
        }else if(user){
            if(user.password!=req.body.password){
                res.json({
                    success : false,
                    message : "Authentication --failed password"
                })
            }else{
                const token = jwt.sign({user}, req.app.get('superSecret'));

                res.json({
                    success : true,
                    message: "Token generated",
                    token
                })
            }
        }
    },(err)=>{
        throw err;
    })
});

//middlewares
router.use((req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, req.app.get('superSecret'), (err, decoded)=>{
            if(err){
                res.json({
                    success : false,
                    message : 'authentication failed'
                })
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }else{
        return res.sendStatus(403).send({
            success: false,
            message : 'Token no exists'
        })
        
    }
});

router.get('/', (req, res)=>{
    res.json({
        message: "Welcome to my Api"
    })
});

router.get('/users', (req, res)=>{
    User.find({}, (err, users)=>{
        if(err) throw err;
        res.json({users});
    });
});

module.exports= router;

