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


