const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const path= require('path');
const methodOverride = require('method-override');

/* Configuracion cookies */
app.use(cookies());

/* Configuracion de express-session */
app.use(session({
    secret: 'Es secreto.',
    resave: false,
    saveUninitialized: false
}));

/* Configuración de ejs */
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

/* Rutas */
const rutasProducts = require('./routes/products.js');
const rutasUsers = require ('./routes/users.js');
const rutasHome = require ('./routes/home.js');

app.use('/', rutasHome);
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);
app.use('/', rutasProducts);


/* Servidor */
app.listen(3000, () => {
    console.log('Servidor Corriendo en el puerto 3000');
});