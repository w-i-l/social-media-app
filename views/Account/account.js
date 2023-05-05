const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');

const {getUser, getPostsFromUser} = require('./account.cjs')
const {getUserByID} = require('../Add_post/add_post.cjs')

const router = express.Router();

router.get("/", async (req, res) => {
    const {cookies} = req;
    const id = cookies['id'];
    const user = await getUserByID(id);

    const userPosts = await getPostsFromUser(user);
    // console.log(user, userPosts);
    res.render('Account/account', {'user':user, 'userPosts':userPosts});
})

router.post('/', (req, res) => {
    
    // const {cookies} = req;
    res.cookie('id', '', {expires: new Date(0)});
    res.clearCookie("id");
    res.redirect('/sign')
})

module.exports = router;