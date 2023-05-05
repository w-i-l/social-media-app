const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');


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

async function getUserByEmailAndPassword(email, password){

    const users = await getUsers(); 

    for (let i = 0; i < users.length; i++) {
        if (users[i]['email'] == email && users[i]['password'] == password) {
            return users[i];
        }
    }

    return undefined;
}

module.exports = {getUsers, getUsersPath, getUserByID, getUserByEmail, getUserByEmailAndPassword};