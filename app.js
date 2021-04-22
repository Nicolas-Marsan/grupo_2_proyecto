const express = require('express');
const app = express();
const path= require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor Corriendo en el puerto 3000');
    
})
app.get('/', function(req , res){
    let htmlPath = path.join(__dirname,'./views/index.html' );
    res.sendFile(htmlPath);
});

app.get('/register', function(req , res){
    let htmlPath = path.join(__dirname,'./views/register.html' );
    res.sendFile(htmlPath);
});

app.get('/login', function(req , res){
    let htmlPath = path.join(__dirname,'./views/login.html' );
    res.sendFile(htmlPath);
});

app.get('/productDetail', function(req , res){
    let htmlPath = path.join(__dirname,'./views/productDetail.html');
    res.sendFile(htmlPath);
});

app.get('/productCart', function(req , res){
    let htmlPath = path.join(__dirname,'./views/productCart.html' );
    res.sendFile(htmlPath);
});


