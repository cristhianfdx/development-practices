const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

//----------------READ---------------------
router.route('/').get(async (req, res)=>{
    const taks = await Task.find();
    res.json(taks);
});

router.route('/:id').get(async (req, res)=>{
    let id = req.params.id;
    const task = await Task.findById(id);
    res.json(task);
});
//------------------------------------------

//--------------CREATE----------------------
router.route('/').post(async(req, res)=>{
    const task = req.body;    
    await Task.create(task);    
    res.json({
        status:"Task created"
    });
});
//-------------------------------------------

//------------UPDATE-------------------------
router.route('/:id').put(async(req,res)=>{
    let id = req.params.id;
    await Task.findByIdAndUpdate(id, req.body);
    res.json({
        status : "Task updated"
    });
});
//----------------------------------------------

//--------------DELETE--------------------------
router.route('/:id').delete(async(req, res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: "Task deleted"
    })
});
//-----------------------------------------------

module.exports = router;