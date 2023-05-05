const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers, getUsersPath} = require('../Auth/auth.cjs');
const { getUser } = require('../Account/account.cjs');
const {getPosts, getPostsFilePath} = require('../Main/main.cjs');
const {getUserByID} = require("../Add_post/add_post.cjs")

const { express } = require('express');

async function modifyUser(user) {

    const users = await getUsers();
  
    let oldUsername = await getUserByID(user['id'])['username'];

    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == user['id']) {
            oldUsername = users[i]['username'];
            users[i]['username'] = user['username'];
            break;
        }
    }
    
    const posts = await getPosts();

    for(let i=0; i<posts.length; i++){
        // console.log(posts[i]['username'], oldUsername, posts[i]['username'] == oldUsername)
        if(posts[i]['username'] == oldUsername){
            posts[i]['username'] = user['username'];
        }
    }

    fs.writeFile(getPostsFilePath(), JSON.stringify(posts), () => {});
    fs.writeFile(getUsersPath(), JSON.stringify(users), () => {});
  }
  

module.exports = {modifyUser};