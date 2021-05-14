const path = require('path');

const usersController = {
    login: function(req , res){
        let htmlPath = path.join(__dirname,'../views/login.html' );
        res.sendFile(htmlPath);
    },
    register: function(req , res){
        let htmlPath = path.join(__dirname,'../views/register.html' );
        res.sendFile(htmlPath);
    }
};

module.exports = usersController;