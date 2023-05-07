const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');

const {getUserByID} = require('../functions/user.js');
const {getPostsFromUserByID, getPostsWithUsernameFrom} = require('../functions/post.js')

const router = express.Router();

router.get("/", async (req, res) => {

    const {cookies} = req;
    const id = cookies['id'];
    const user = await getUserByID(id);
    const username = user['username'];

    const userPosts = await getPostsFromUserByID(id);
    const ids = userPosts.map((post) => post['username']);
    const usernamePosts = await getPostsWithUsernameFrom(userPosts)
    res.render('Account/account', {'user':user, 'userPosts':usernamePosts, ids:ids});
})

router.post('/', (req, res) => {
    
    // const {cookies} = req;
    res.cookie('id', '', {expires: new Date(0)});
    res.clearCookie("id");
    res.redirect('/sign')
})

module.exports = router;