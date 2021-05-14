const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req , res){
    let htmlPath = path.join(__dirname,'../views/index.html' );
    res.sendFile(htmlPath);
});

module.exports = router;