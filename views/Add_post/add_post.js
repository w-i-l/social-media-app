const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const formidableMidleware = require('../middlewares/formidableMiddleware')

function getPostsFilePath() {
    return path.join('./', 'posts.json');
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

router.post('/', formidableMidleware(), async (req, res) => {

    const posts = await getPosts();

    const file = req.files['image'];
    const fileName = v4() + '.' + file.originalFilename.split('.').at(-1);
    const picturePath = path.join('./public/images', fileName);

    const newPost = {
        username: req.body.username,
        image: '/images/' + fileName,
        description: req.body.description,
    }

    const imageData = fs.readFileSync(file.filepath);
    fs.writeFileSync(picturePath, imageData, (err) => {
        console.log(err)
    });

    posts.push(newPost);

    console.log(posts);

    fs.writeFile(getPostsFilePath(), JSON.stringify(posts), () => {
        res.redirect('/main');
    });
})

module.exports = router