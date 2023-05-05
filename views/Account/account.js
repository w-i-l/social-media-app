const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');

const {getUser} = require('./account.cjs')

const router = express.Router();

router.get("/", async (req, res) => {
    const {cookies} = req;
    const email = cookies['email'];
    const userResponse = await getUser(email);

    const user = {
        username:userResponse['username'],
        email:userResponse['email'],
    }

    res.render('Account/account', user);
})

router.post('/', (req, res) => {
    
    // const {cookies} = req;
    res.cookie('email', '', {expires: new Date(0)});
    res.clearCookie("email");
    res.redirect('/sign')
})

module.exports = router;