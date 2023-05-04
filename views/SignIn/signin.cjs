const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers} = require('../Auth/auth.cjs')

async function userExists(user){
    const users = await getUsers(); 

    var i;
    for (i = 0; i < users.length; i++) {
        if (users[i]['email'] == user['email']
            && users[i]['password'] == user['password']) {
            return true;
        }
    }

    return false;
}

module.exports = {userExists}