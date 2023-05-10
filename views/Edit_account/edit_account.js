const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');


const formidableMiddleware = require('../middlewares/formidableMiddleware')

const {getPostsFromUser} = require('../functions/user.js')
const {modifyUser} = require("./edit_account.cjs")
const {getUsers, getUserByID} = require("../functions/user.js");


router.get('/', async (req, res) => {
    
    const {cookies} = req;
    const user = await getUserByID(cookies['id']);
    const profile_picture = user['profile_picture'];

    res.render(path.join(__dirname,'edit_account'), {profile_picture:profile_picture});
})


router.post('/', formidableMiddleware() ,async (req, res) => {
    
    const {cookies} = req;
    const oldUser = await getUserByID(cookies['id']);
    

    const file = req.files['image'];
    const fileName = v4() + '.jpg';
    const picturePath = path.join('./public/profile_pictures', fileName);
    
    const updatedUser = {
        id: cookies['id'],
        username: req.body.username,
        email: oldUser['email'],
        password: oldUser['password'],
        profile_picture: '/profile_pictures/' + fileName,
    }
    
    await modifyUser(updatedUser);  

    const imageData = fs.readFileSync(file.filepath);
    fs.writeFileSync(picturePath, imageData, (err) => {
        console.log(err)
    });

    res.redirect('/account');
})

module.exports = router