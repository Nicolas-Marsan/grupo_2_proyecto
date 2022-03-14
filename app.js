const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const path= require('path');
const methodOverride = require('method-override');
const usuarioLogueadoMiddleware = require('./src/middlewares/usuarioLogueadoMiddleware');
const variableMiddleware = require('./src/middlewares/variableMiddleware');
const adminMiddleware = require('./src/middlewares/adminMiddleware');
/* Configuracion cookies */
app.use(cookies());

/* Configuracion de express-session */
app.use(session({
    secret: 'Es secreto.',
    resave: false,
    saveUninitialized: false
}));
app.use(usuarioLogueadoMiddleware);
app.use(variableMiddleware);
app.use(adminMiddleware);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/* Configuración de ejs */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

/* Rutas */
const rutasProducts = require('./src/routes/products.js');
const rutasUsers = require ('./src/routes/users.js');
const rutasHome = require ('./src/routes/home.js');
const rutasApi = require ('./src/routes/api.js');

app.use('/', rutasHome);
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);
app.use('/api', rutasApi);



/* Servidor */
app.listen(3003, () => {
    console.log('Servidor Corriendo en el puerto 3003');
});

app.use((req, res, next) => {
    res.status(404).render('error-404');
    next();
});