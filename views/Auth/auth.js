const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {verify, addUser} = require('./auth.cjs');

router.get('/', (req, res) =>{
    res.render('Auth/auth')
})

router.post('/', (req, res) => {
    
    const result = verify(req.body);

    if(result){
        
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        
        addUser(newUser);
        res.redirect('/main')
    }else{
        res.render("Auth/auth.ejs", req.body)
    }
})

module.exports = router