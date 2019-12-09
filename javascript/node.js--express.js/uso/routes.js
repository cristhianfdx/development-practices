var express = require('express');
var router = express.Router();
//Rutas
router.get('/', (req, res) =>{
    res.render("index.ejs");
});

router.get('/login', (req, res) =>{
    res.render("login.ejs");
});

router.get("/login", (req, res)=>{
    res.end("Aqui va el login");
});

module.exports = router;