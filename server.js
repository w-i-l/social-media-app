const { localsName } = require("ejs");
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

app.get('/auth', (req, res) =>{
    res.render('Auth/auth')
})

app.post('/auth', (req, res) => {
    users.push(req.body)
    res.render('Main/main')
    loggedIn = true
})

app.listen(3000)