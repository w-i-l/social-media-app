const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require("express");
const cookieParser = require('cookie-parser'); 

const { containsObject, getUsers } = require('../Auth/auth.cjs');
const {userExists} = require('./signin.cjs')

const router = express.Router();

router.get('/', (req, res) => {

    const {cookies} = req;

    if(cookies['email']){
        res.redirect('/main');
    }
    else{
        res.render('SignIn/signin');
    }
})

router.post('/', async (req, res) => {

    const user = {
        email:req.body.email,
        password:req.body.password,
    }
        
    const result = await userExists(user);

    if(result){
        res.cookie('email', req.body.email);
        res.redirect('/main');
    }
    else{
        res.render('SignIn/signin', user)
    }

})

module.exports = router;