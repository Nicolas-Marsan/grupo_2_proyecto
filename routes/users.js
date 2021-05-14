const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', function(req , res){
    let htmlPath = path.join(__dirname,'../views/login.html' );
    res.sendFile(htmlPath);
});

router.get('/register', function(req , res){
    let htmlPath = path.join(__dirname,'../views/register.html' );
    res.sendFile(htmlPath);
});

module.exports = router;