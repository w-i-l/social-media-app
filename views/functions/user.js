const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

function isUserInUsersIDS(usersIdsArray, userId) {

    for (let i = 0; i < usersIdsArray.length; i++) {
        if (usersIdsArray[i] == userId) {
            return true;
        }
    }

    return false;
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
            } 
            catch(err) {
                resolve([]);
            }
        })

    })
}

async function getUserByEmail(email){

    const users = await getUsers(); 

    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] == email) {
            return users[i];
        }
    }

    return undefined;
}

async function getUserByID(id){

    const users = await getUsers();

    for(let i=0; i<users.length; i++){
        if(users[i]['id'] == id){
            return users[i];
        }
    }

    return undefined;

}

async function getUserByUsername(username){

    const users = await getUsers();

    for(let i=0; i<users.length; i++){
        if(users[i]['username'] == username){
            return users[i];
        }
    }

    return undefined;

}

async function getUserByEmailAndPassword(email, password){

    const users = await getUsers(); 

    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] == email && users[i]['password'] == password) {
            return users[i];
        }
    }

    return undefined;
}

async function getUsersIDS(){
    
    const users = await getUsers(); 

    return users.map((user) => user['id']);

}

module.exports = {getUsers, getUsersPath, getUserByID, getUserByUsername, getUserByEmail, getUserByEmailAndPassword, getUsersIDS, isUserInUsersIDS};