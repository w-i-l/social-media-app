const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');


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

module.exports = {getPosts, getPostsFilePath}

