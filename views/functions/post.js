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

async function getPostsFromUserByID(id){

    const allPosts = await getPosts();

    return allPosts.filter((post) => {return post['username'] == id});

}

async function getPostsWithUsernameFrom(posts){

    const {getUserByID} = require('./user.js')

    // const posts = await getPosts();

    const newPosts = await Promise.all(posts.map(async (post) => {

        const user = await getUserByID(post['username']);

        return {
            ...post,
            username: user['username'],
        };
    }));

    return newPosts;
}

module.exports = {getPostsPath, getPosts, getPostsFromUserByID, getPostsWithUsernameFrom};