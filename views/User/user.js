const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');
const { getPosts, getPostsFromUserByID, getPostsWithUsernameFrom } = require('../functions/post');
const { getUsersIDS, isUserInUsersIDS, getUserByID, getUserByUsername } = require('../functions/user');

const router = express.Router();


router.get('/:user', async (req, res) => {

    const {cookies} = req;
    const user = req.params.user;

    const searchedUser = await getUserByUsername(user);
    
    if(searchedUser == undefined){
        res.status(404);
        res.redirect('/error/404')
        return res.end();
    }

    const id = searchedUser['id'];

    const posts = await getPostsFromUserByID(id);
    const ids = posts.map((post) => post['username']);
    const newPosts = await getPostsWithUsernameFrom(posts);

    res.render(path.join(__dirname,"user.ejs"), {userPosts:newPosts.reverse(), ids:ids, user:searchedUser});
})


module.exports = router;