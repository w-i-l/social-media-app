const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('SignIn/signin')
})

app.get('/auth', (req, res) =>{
    res.render('Auth/auth')
})

app.listen(3000)