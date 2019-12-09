const router = require('express').Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/authenticate', (req, res)=>{
    
    User.findOne({
        name : req.body.name,
        password: req.body.password
    })
    .then(data => {
        if(data){
            const token = jwt.sign({data}, req.app.get('jwtSecret'));
            res.json({data, token})
        }else{
            res.json({success: false, message: "failed"})
        }
    })
    .catch(err=> console.log(err));
});

router.use((req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token){
        jwt.verify(token, req.app.get('jwtSecret'), (err, decoded)=>{
            if(err){
                res.json({
                    success: false,
                    message : "authentication failed"
                });
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }else{
        res.status(403).json({success:false, message: "No token exists"});
    }

});

router.get('/', (req, res) => {
    res.json({message: "Welcome to my API"});
});

router.get('/users',async (req, res) => {
    const users = await User.find();
    res.json(users);
})

module.exports = router;
