const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { compile } = require('ejs');

const {getPostsFromUser} = require('../functions/user.js')
const {modifyUser} = require("./edit_account.cjs")
const {getUsers, getUserByID} = require("../functions/user.js");

const router = express.Router();

router.get('/', (req, res) => {
    res.render(path.join(__dirname,'edit_account'));
})

router.post('/', async (req, res) => {

    const {cookies} = req;
    const oldUser = await getUserByID(cookies['id']);
    
    const user = {
        id:cookies['id'],
        username:req.body.username,
        email:oldUser['email'],
        password:oldUser['password'],
    }

    await modifyUser(user);

    res.redirect('/account');
})

module.exports = router