const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

function getPostsFilePath() {
    return path.join('', 'posts.json');
}

function getPosts() {
    return new Promise((resolve, reject) => {
        const filePath = getPostsFilePath();


        fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if(err) {
                resolve([]);
            }
            try {
                resolve(JSON.parse(data));
            } catch(err) {
                resolve([]);
            }
        })
    });
}

router.get('/',(req, res) => {
    res.render('Add_post/add_post')
})

router.post('/', async (req, res) => {
    const path = getPostsFilePath();
    const posts = await getPosts();

    const newPost = {
        username: req.body.username,
        image: req.body.image,
        description: req.body.description,
    }

    posts.push(newPost);

    console.log(posts);
    console.log(getPostsFilePath());

    fs.writeFile(getPostsFilePath(), JSON.stringify(posts), (err) => {
        res.redirect('/add-post');
    });
})

module.exports = router