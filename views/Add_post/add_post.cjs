const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers} = require('../Auth/auth.cjs');
const { getUser } = require('../Account/account.cjs');

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

async function getUserByID(id){

    const users = await getUsers();

    for(let i=0; i<users.length; i++){
        if(users[i]['id'] == id){
            return users[i];
        }
    }

    return false;

}

module.exports = {getPosts, getPostsFilePath, getUserByID}

