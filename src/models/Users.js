const fs = require('fs');
const path = require('path');

/* const usersFilePath = path.join(__dirname, '../data/users.json');
const fileName = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */

const User = {
    fileName: '../data/users.json',
    getData: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, this.fileName), 'utf-8'))
    },
    //* nos busca todos los usuarios del json pasados a objeto literal en getData/
    findAll: function() {
        return this.getData();
    },
    findBypk:function(id){
        let allUser = this.findAll();
        let userFond = allUser.find((user) => user.id === id);
        return userFond

    },
    //* para que al crear usuario tenga un id diferente en este caso el ultimo +1/
    generateId: function(){
        let allUser = this.findAll();
        let lastId = allUser.pop();
        if (lastId) {
            return lastId.id + 1
        }
            return 1;
    
    },
    //* nos va a servir para que no se puedan registrar con el mismo mail/
    findByField:function(field, text){
        let allUser = this.findAll();
        let userFond = allUser.find((user) => user[field] === text);
        return userFond;

    },
    //* crear usuario/
    create: function(userData) {
       let newUser = {
            id: this.generateId(),
            ...userData
        } 
        let allUser = this.findAll();
        allUser.push(newUser);
        fs.writeFileSync(path.resolve(__dirname, this.fileName), JSON.stringify(allUser, null, ' '));
        return true;
    },
    //* Borrar usuario /
    delete: function(id){
        let allUser = this.findAll();
        let finalUsers = allUser.filter((user) => user.id !== id)
        fs.writeFileSync(path.resolve(__dirname, this.fileName), JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}
/* console.log(User.findByField('email', 'dhenrys6@mysql.com')); */

module.exports = User