const express = require('express');
const router = express.Router();

//Model
const Note = require('../models/Notes');
const {isAuthenticated} = require('../helpers/auth');

//------------Render Views--------------------------
router.get('/notes/add', isAuthenticated, (req, res)=>{//View New Note
    res.render('notes/new_note');    
});

router.get('/notes/edit/:id', isAuthenticated, async(req, res)=>{
    const id = req.params.id;
    const note = await Note.findOne({_id: id});       
    res.render('notes/edit_notes', {note});
});
//---------------------------------------------------

//-------------------CRUD---------------------------------------

router.post('/notes/new_note', isAuthenticated, async(req, res)=>{//Create Note
    const {title, description} = req.body;
    const errors =[];
    //Data Validation
    if(!title){
        errors.push({text: "Please Write a Title"});
    }

    if(!description){
        errors.push({text: "Please Write a Description"});
    }

    if(errors.length>0){
        res.render('notes/new_note',{
            errors,
            title, 
            description
        })
    }else{
        const newNote = new Note({title, description});
        newNote.user = req.user.id;
        await newNote.save();
        req.flash('success_msg', 'Note Add successfully');        
        res.redirect('/notes');
    }
});

router.get('/notes', isAuthenticated, async(req, res)=>{//Read Notes
    const notes = await Note.find({user: req.user.id}).sort({date: 'desc'});
    res.render('notes/all_notes', {notes});
});

router.put('/notes/edit_note/:id', isAuthenticated, async(req, res)=>{//Update Notes
    const {title, description} = req.body;
    const id = req.params.id;
    await Note.findOneAndUpdate({_id: id}, {title, description});
    req.flash('success_msg', 'Note Updated successfully'); 
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', isAuthenticated, async(req, res)=>{//Delete Notes
    const id = req.params.id;
    await Note.findOneAndDelete({_id: id});
    req.flash('success_msg', 'Note Deleted successfully'); 
    res.redirect('/notes');
});


module.exports = router;