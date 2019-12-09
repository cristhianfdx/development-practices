const router = require('express').Router();

const User = require('../models/user');

router.get('/', (req, res)=>{
    res.send("The API is at <strong>http://localhost:3000/api</strong>");
});

router.post('/setup', (req, res)=>{
    const user = new User({
        name: "crash",
        password: "1234",
        admin : true
    });
    user.save()
    .then(data=> res.json({message : "User Created"}))
    .catch(err=> res.status(500).json({message: err.message}));
});

module.exports = router;