const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i]['username'] == obj['username']
            && list[i]['email'] == obj['email']
            && list[i]['password'] == obj['password']) {
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

function save_credientials(){
    const username = document.getElementsByName("username");
    console.log(username);
}

function getUsersPath(){
    return'Users/users.json';
}

function getUsers(){
    return new Promise((resolve, reject) =>{
        
        const filePath = getUsersPath();

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

    })
}

async function addUser(user){

    const users = await getUsers();

    // if the user is not in the array we add it
    if(containsObject(user, users) == false){
        users.push(user);
        fs.writeFile(getUsersPath(), JSON.stringify(users), (after) => {});
    }

}

module.exports = { verify, save_credientials, getUsersPath, getUsers, addUser, containsObject };