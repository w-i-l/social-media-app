// import {verify} from "./views/Auth/auth.cjs";
// import './views/Auth/auth.cjs'
// import 'ejs'
const { localsName } = require("ejs");
// import express from 'express'
const express = require("express")
const app = express()

const users = []
let loggedIn = false

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    if(loggedIn){
        res.render('Main/main')
    }
    else{
        res.render('SignIn/signin')
    }
})

const authRouter = require('./views/Auth/auth.js');
app.use('/auth', authRouter);

app.listen(3000)