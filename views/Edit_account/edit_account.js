const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { compile } = require('ejs');

const {getPostsFromUser, getUser} = require('../Account/account.cjs')
const {modifyUser} = require("./edit_account.cjs")
const {getUsers} = require("../Auth/auth.cjs")
const {getUserByID} = require("../Add_post/add_post.cjs")

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Edit_account/edit_account');
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