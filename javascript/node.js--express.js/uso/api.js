var express = require("express");
var router = express.Router();

router.get("/", (req, res) =>{
    res.json({
        primerApi: "Hola esta es mi primera API con Express"
    });
});

module.exports = router;