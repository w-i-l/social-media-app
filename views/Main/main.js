const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Main/main')
})

module.exports = router