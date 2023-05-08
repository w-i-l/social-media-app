const express = require('express');

const router = express.Router();

router.get('/:error', (req, res) => {
    const error = req.params.error;

    if(error == '404'){
        res.render('Error/404/404');
    }
})

module.exports = router;