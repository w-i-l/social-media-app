const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers} = require('../Auth/auth.cjs')

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

module.exports = {getUser}