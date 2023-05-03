const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');

function getPostsFilePath() {
    return path.join('./', 'posts.json');
}

function getPosts() {
    return new Promise((resolve, reject) => {
        const filePath = getPostsFilePath();


        fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if(err) {
                console.log(err);
                resolve([]);
            }
            try {
                resolve(JSON.parse(data));
            } catch(err) {
                console.log(err);
                resolve([]);
            }
        })
    });
}

module.exports = {getPostsFilePath, getPosts};