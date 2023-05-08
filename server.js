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

// app.use((req, res, next) => {
// 	const {cookies} = req;
// 	console.log(cookies['email'])

// 	if(cookies['email'] == undefined){
// 		return res.redirect('/sign');
// 	}
// 	else{

// 		next();
// 	}
// })

// app.use((req, res, next) => {
// 	console.log(req.cookies['id']);
// 	next();
// })

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

app.listen(3000)