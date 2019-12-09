const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

//READ
router.get('/', async (req, res, next)=>{
    
    try {

        const tasks = await Task.find();        
        res.status(200).json(tasks);
        
    } catch (error) {
        res.status(404).json({status: "Tasks not found"});
    }
});

router.get('/:id', async(req, res)=>{

    try {

        const id = req.params.id;
        const task = await Task.findOne({_id : id});
        res.status(200).json(task);
        
    } catch (error) {
        res.status(404).json({status: "Task not found"});
    }
    
});

//CREATE
router.post('/', async(req, res)=>{
    try {

        const data = req.body;
        await Task.create(data);
        res.status(201).json({status: "Task created"});

    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE
router.put('/:id', async (req, res)=>{
    try {

        const id = req.params.id;
        const data = req.body;
        await Task.findOneAndUpdate({_id: id}, data);

        res.status(201).json({status: "Task updated"});
        
        
    } catch (error) {
        res.status(404).json({status: "Task not found"});
    }
});

//DELETE
router.delete('/:id', async(req, res)=>{
    try {

        const id = req.params.id;
        await Task.findOneAndDelete({_id: id});
        res.status(201).json({status: "Task deleted"});
        
    } catch (error) {
        res.status(404).json({status: "Task not found"});
    }
});

    

module.exports = router;