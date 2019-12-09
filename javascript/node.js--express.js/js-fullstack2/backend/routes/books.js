const {unlink} = require('fs-extra');
const path = require('path');
const express = require('express');
const router =  express.Router();

const Book = require('../models/Book');

router.get('/', async(req, res)=>{
    const books = await Book.find();
    res.json(books);
});

router.post('/', async(req, res)=>{
    const {title, author, isbn} = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const book = new Book({title, author, isbn, imagePath});
    await book.save();
    res.json({"status": "book created"});
});

router.delete('/:id', async(req, res)=>{
    let id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    unlink(path.resolve('./backend/public' + book.imagePath));
    res.json({"status": "book deleted"});
});


module.exports = router;