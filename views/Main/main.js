const express = require('express');
const router = express.Router();
const {getPosts, getPostsWithUsernameFrom} = require('../functions/post.js');
const { getUserByID, getUserByUsername } = require('../functions/user.js');


router.get('/', async (req, res) => {

    const allPosts = await getPosts();

    const ids = allPosts.map((user) => user['username']);
    const posts = await getPostsWithUsernameFrom(allPosts);

    res.render('Main/main', {posts:posts.reverse(), usernames:ids.reverse()})
})

router.post('/', async (req, res) => {
    const username = req.body['username'];
    const user = await getUserByUsername(username);

    console.log(user)

    if(user == undefined){
        res.redirect('/main');
        res.end();
    }

    res.redirect(`/user/${user['id']}`);
})

module.exports = router