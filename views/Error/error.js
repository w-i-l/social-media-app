const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/:error', (req, res) => {
    const error = req.params.error;

    if(error == '404'){
        res.render(path.join(__dirname,'404/404.ejs'));
    }
})

module.exports = router;