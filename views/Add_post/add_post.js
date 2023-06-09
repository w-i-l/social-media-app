const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const formidableMidleware = require('../middlewares/formidableMiddleware')

const {getPosts, getPostsPath} = require('../functions/post.js')
const {getUserByID} = require('../functions/user.js');

router.get('/', async(req, res) => {

    const id = req.cookies['id'];
    const user = await getUserByID(id);

    res.render(path.join(__dirname,"add_post.ejs"), {profile_picture:user['profil_picture'], username:user['username'], profile_picture:user['profile_picture'], id:id})
})

router.post('/', formidableMidleware(), async (req, res) => {

    const posts = await getPosts();

    const file = req.files['image'];
    const fileName = v4() + '.jpg';
    const picturePath = path.join('./public/images', fileName);

    const id = req.cookies['id'];
    const user = await getUserByID(id);

    const newPost = {
        username: id,
        image: '/images/' + fileName,
        description: req.body.description,
        date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    }

    const imageData = fs.readFileSync(file.filepath);
    fs.writeFileSync(picturePath, imageData, (err) => {
        console.log(err)
    });

    posts.push(newPost);

    fs.writeFile(getPostsPath(), JSON.stringify(posts), (after) => {
        res.redirect('/main');
    });
})

module.exports = router