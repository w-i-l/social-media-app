const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');
const { compile } = require('ejs');
const { getPosts, getPostsFromUserByID, getPostsWithUsernameFrom } = require('../functions/post');
const { getUsersIDS, isUserInUsersIDS, getUserByID } = require('../functions/user');

const router = express.Router();


router.get('/:id', async (req, res) => {

    const {cookies} = req;
    const id = req.params.id;
    console.log(id);

    const usersIds = await getUsersIDS();
    const result = isUserInUsersIDS(usersIds, id);

    if(result == false){
        res.status(404);
        res.end();
    }

    const posts = await getPostsFromUserByID(id);
    const ids = posts.map((post) => post['username']);
    const newPosts = await getPostsWithUsernameFrom(posts);

    const username = await getUserByID(id);

    res.render("User/user", {userPosts:newPosts.reverse(), ids:ids, username:username['username']});
})


module.exports = router;