const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require("express");
const cookieParser = require('cookie-parser'); 

const {getUserByEmailAndPassword} = require('../functions/user')

const router = express.Router();

router.get('/', (req, res) => {

    const {cookies} = req;

    console.log(cookies['id']);

    if(cookies['id']){
        res.redirect('/main');
    }
    else{
        res.render(path.join(__dirname, 'signin.ejs'));
    }
})


router.post('/', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
        
    const user = await getUserByEmailAndPassword(email, password);

    if(user){
        res.cookie('id', user['id']);
        res.redirect('/main');
    }
    else{
        res.render(path.join(__dirname,'signin.ejs'), user)
    }

})

module.exports = router;