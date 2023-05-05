const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const {getUsers} = require('../Auth/auth.cjs');
const { getUser } = require('../Account/account.cjs');
const {getUsersPath} = require('../Auth/auth.cjs')

async function modifyUser(user) {
    const users = await getUsers();
  
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]['username'], user['username'], users[i]['email']==user['email'])
      if (users[i]['email'] == user['email']) {
        users[i]['username'] = user['username'];
        break;
      }
    }
    
    fs.writeFile(getUsersPath(), JSON.stringify(users), () => {});

  }
  

module.exports = {modifyUser};