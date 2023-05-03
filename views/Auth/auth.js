const express = require('express');
const router = express.Router();

const {verify} = require('./auth.cjs');

router.get('/', (req, res) =>{
    res.render('Auth/auth')
})

router.post('/', (req, res) => {
    
    const result = verify(req.body);

    if(result){
        res.render('Main/main.ejs');
    }else{
        res.render("Auth/auth.ejs", req.body)
    }

})

module.exports = router