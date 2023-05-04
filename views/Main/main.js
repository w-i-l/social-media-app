const express = require('express');
const router = express.Router();
const {getPosts} = require('./main.cjs');


router.get('/', async (req, res) => {
    const posts = await getPosts();
    // console.log(posts);
    res.render('Main/main', {posts:posts.reverse()})
})

module.exports = router