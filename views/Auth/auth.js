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
            id:v4(),
            username: req.body.username.toLowerCase(),
            email: req.body.email,
            password: req.body.password,
        }
        
        const result = addUser(newUser);
        
        if(result){
            res.redirect('/sign');
        }
        else{
            res.render(path.join(__dirname,"auth.ejs"), req.body);
        }

    }else{
        res.render(path.join(__dirname,"auth.ejs"), req.body)
    }
})

module.exports = router