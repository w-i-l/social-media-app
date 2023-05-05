const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');

const {getUserByID} = require('../functions/user.js');
const {getPostsFromUserByUsername} = require('../functions/post.js')

const router = express.Router();

router.get("/", async (req, res) => {

    const {cookies} = req;
    const id = cookies['id'];
    const user = await getUserByID(id);
    const username = user['username'];

    const userPosts = await getPostsFromUserByUsername(username);
    res.render('Account/account', {'user':user, 'userPosts':userPosts});
})

router.post('/', (req, res) => {
    
    // const {cookies} = req;
    res.cookie('id', '', {expires: new Date(0)});
    res.clearCookie("id");
    res.redirect('/sign')
})

module.exports = router;