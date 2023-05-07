const express = require('express');
const router = express.Router();
const {getPosts, getPostsWithUsernameFrom} = require('../functions/post.js');
const { getUserByID } = require('../functions/user.js');


router.get('/', async (req, res) => {

    const allPosts = await getPosts();

    const posts = await getPostsWithUsernameFrom(allPosts);

    res.render('Main/main', {posts:posts.reverse()})
})

module.exports = router