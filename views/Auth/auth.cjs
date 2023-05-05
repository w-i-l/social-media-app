const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers, getUsersPath} = require('../functions/user.js')

function containsObject(obj, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]['email'] == obj['email']) {
            return true;
        }
    }

    return false;
}

function verify(credentials){

    const username = credentials.username;
    const good_username = username.length >= 4;

    const email = credentials.email;
    const good_email = String(email)
                        .toLocaleLowerCase()
                        .match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    
    const password = credentials.password;
    const good_password = (password.length >= 8);

    return good_username && good_email && good_password;
}

async function addUser(user){

    const users = await getUsers();

    // if the user is not in the array we add it
    if(containsObject(user, users) == false){
        users.push(user);
        fs.writeFile(getUsersPath(), JSON.stringify(users), (after) => {});
        return true;
    }

    return false;

}

module.exports = { verify, addUser, containsObject };