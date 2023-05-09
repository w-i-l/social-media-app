const express = require('express');
const router = express.Router();
const {getPosts, getPostsWithUsernameFrom} = require('../functions/post.js');
const { getUserByID, getUserByUsername } = require('../functions/user.js');
const path = require('path');

router.get('/', async (req, res) => {

    const allPosts = await getPosts();

    const ids = allPosts.map((user) => user['username']);
    const posts = await getPostsWithUsernameFrom(allPosts);

    res.render(path.join(__dirname,'main.ejs')  , {posts:posts.reverse(), usernames:ids.reverse()})
})

module.exports = router