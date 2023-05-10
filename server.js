const { localsName } = require("ejs");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const {getUserByID} = require('./views/functions/user')


const users = []
let loggedIn = false

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) =>{
	res.redirect('/sign')
})

const signRouter = require('./views/SignIn/signin.js');
app.use('/sign', signRouter);

const authRouter = require('./views/Auth/auth.js');
app.use('/auth', authRouter);

const mainRouter = require('./views/Main/main.js');
app.use('/main', mainRouter);

const addPostRouter = require('./views/Add_post/add_post.js');
app.use('/add-post', addPostRouter);

const accountRouter = require('./views/Account/account.js');
app.use('/account', accountRouter);

const editAccountRouter = require('./views/Edit_account/edit_account.js');
app.use('/edit_account', editAccountRouter);

const userRouter = require('./views/User/user.js');
app.use('/user', userRouter);

const errorRouter = require('./views/Error/error.js');
app.use('/error', errorRouter);

app.listen(3000)

module.exports = app