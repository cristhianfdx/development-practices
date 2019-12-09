'use strict'

const express = require('express');
const router = express.Router();

const model = require('../model/task');

//READ
router.get('/', (req, res) => {

    model.find({}, function(err, data){
        if(err) throw err;

        res.render('index',{
            title: 'CRUD',
            tasks: data            
        });
    });        
});

//CREATE
router.post('/add', (req, res)=>{
    let body = req.body;
    body.status = false;

    model.create(body, function(err, data){
        if(err) throw err;
        res.redirect('/');
    });
});


//DELETE
router.get('/delete/:id', (req, res) =>{
    let id = req.params.id;

    model.remove({_id : id}, (err, data)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

//UPDATE
router.route('/turn/:id').get((req, res)=>{
    let id = req.params.id;

    model.findById(id, (err, data)=>{
        if(err) throw err;
        data.status = !data.status;
        data.save()
        .then(() => res.redirect('/'));
    });
});

module.exports = router;