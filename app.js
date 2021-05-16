const express = require('express');
const app = express();
const path= require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));

const rutasProducts = require('./routes/products.js');
const rutasUsers = require ('./routes/users.js');
const rutasHome = require ('./routes/home.js');

app.use('/', rutasHome);
app.use('/product', rutasProducts);
app.use('/users', rutasUsers);
app.use('/crear', rutasProducts);


app.listen(3000, () => {
    console.log('Servidor Corriendo en el puerto 3000');
});