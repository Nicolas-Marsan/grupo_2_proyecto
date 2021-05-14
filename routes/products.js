const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/productDetail', function(req , res){
    let htmlPath = path.join(__dirname,'../views/productDetail.html');
    res.sendFile(htmlPath);
});

router.get('/productCart', function(req , res){
    let htmlPath = path.join(__dirname,'../views/productCart.html' );
    res.sendFile(htmlPath);
});

module.exports = router;