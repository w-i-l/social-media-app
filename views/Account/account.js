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
    res.render(path.join(__dirname, 'account.ejs'), {'user':user, 'userPosts':usernamePosts.reverse(), ids:ids});
})

router.get('/logout',(req, res) => {
    
    console.log('f')
    // const {cookies} = req;
    res.cookie('id', '', {expires: new Date(0)});
    res.clearCookie("id");
    res.redirect('/sign');
})

router.post('/', (req, res) => {
    
    // const {cookies} = req;
    res.cookie('id', '', {expires: new Date(0)});
    res.clearCookie("id");
    res.redirect('/sign')
})


module.exports = router;