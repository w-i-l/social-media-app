const { localsName } = require("ejs");
const express = require("express")
const app = express()

const users = []
let loggedIn = false

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    if(loggedIn){
        // res.redirect('/')
        res.render('Main/main')
    }
    else{
        // res.render('SignIn/signin')
        res.redirect('/sign')
    }
})

const signRouter = require('./views/SignIn/signin.js');
app.use('/sign', signRouter);

const authRouter = require('./views/Auth/auth.js');
app.use('/auth', authRouter);

const mainRouter = require('./views/Main/main.js');
app.use('/main', mainRouter);

const addPostRouter = require('./views/Add_post/add_post.js');
app.use('/add-post', addPostRouter);

app.listen(3000)