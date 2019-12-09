const express = require('express');
const passport = require('passport');
const router = express.Router();

//Model
const User = require('../models/User');

//-----------Render Views------------------

router.get('/users/sign_up', (req, res)=>{
    res.render('users/sign_up');      
});
//-----------------------------------------

router.post('/users/sign_up',async(req, res)=>{
    const {name, email, password, confirm_password} = req.body;   
    const errors = [];

    if(name == ""){
        errors.push({text: "Field name required"});
    }

    if(email == ""){
        errors.push({text: "Field email required"});
    }
    
    if(password != confirm_password){
        errors.push({text: "Password do not match"});
    }
    if(password.length < 4){
        errors.push({text: "Password must be at least 4 characters"});
    }
    if(errors.length>0){
        res.render('users/sign_up', {errors, name, email, password, confirm_password});
    }else{
        const emailUser = await User.findOne({email: email});

        if(emailUser){

            req.flash('error_msg', 'The Email is already in use.');
            res.redirect('/users/sign_up');
        }else{

            const user = new User({name, email, password});
            user.password = await user.encryptPassword(password);
            await user.save();          
            req.flash('success_msg', 'You are registered');
            res.redirect('/users/sign_in');

        }        
    }    
});

router.get('/users/sign_in', (req, res)=>{
    res.render('users/sign_in');
});

router.post('/users/sign_in', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/sign_in',
    failureFlash: true
}));

router.get('/users/logout', (req, res)=>{
    req.logOut();
    res.redirect('/');
});

module.exports = router;

