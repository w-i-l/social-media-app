const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require("express");
const cookieParser = require('cookie-parser'); 

const {getUserByEmailAndPassword} = require('../functions/user')

const router = express.Router();

router.get('/', (req, res) => {

    const {cookies} = req;

    if(cookies['id']){
        res.redirect('/main');
    }
    else{
        res.render('../var/task/views/SignIn/signin');
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
        res.render('SignIn/signin', user)
    }

})

module.exports = router;