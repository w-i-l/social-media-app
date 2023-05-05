const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const express = require('express');
const { route } = require('../SignIn/signin');

const router = express.Router();

router.get("/", (req, res) => {
    res.render('Account/account');
})

module.exports = router;