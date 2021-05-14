const path = require('path');

const homeController = {
    home: function(req , res){
        let htmlPath = path.join(__dirname,'../views/index.html' );
        res.sendFile(htmlPath);
    }
};

module.exports = homeController;