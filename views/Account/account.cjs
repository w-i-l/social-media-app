const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers} = require('../Auth/auth.cjs');
const {getPosts} = require('../Main/main.cjs');

async function getUser(email){
    const users = await getUsers(); 

    var i;
    for (i = 0; i < users.length; i++) {
        if (users[i]['email'] == email) {
            return users[i];
        }
    }

    return false;
}

async function getPostsFromUser(user){

    const allPosts = await getPosts();
    // console.log(allPosts);

    return allPosts.filter((post) => {return post['username'] == user['username']});

}

module.exports = {getUser, getPostsFromUser}