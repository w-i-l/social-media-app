const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

function getPostsPath() {
    return path.join('./', 'posts.json');
}

function getPosts() {
    return new Promise((resolve, reject) => {

        const filePath = getPostsPath();

        fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if(err) {
                resolve([]);
            }
            try {
                resolve(JSON.parse(data));
            } 
            catch(err) {
                resolve([]);
            }
        })
    });
}

async function getPostsFromUserByUsername(username){

    const allPosts = await getPosts();

    return allPosts.filter((post) => {return post['username'] == username});

}

module.exports = {getPostsPath, getPosts, getPostsFromUserByUsername};