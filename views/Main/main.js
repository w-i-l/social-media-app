const express = require('express');
const router = express.Router();
const {getPosts, getPostsWithUsernameFrom} = require('../functions/post.js');
const { getUserByID } = require('../functions/user.js');


router.get('/', async (req, res) => {

    const allPosts = await getPosts();

    const ids = allPosts.map((user) => user['username']);
    const posts = await getPostsWithUsernameFrom(allPosts);

    res.render('Main/main', {posts:posts.reverse(), usernames:ids.reverse()})
})

module.exports = router