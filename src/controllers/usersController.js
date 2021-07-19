const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const bcryptjs = require('bcryptjs'); //*hasheare contra/
const db = require("../database/models");

const usersController = {
    register: function (req , res){
        res.cookie('testing', '¡Hola mundo!');
        res.render('register');
    },

    all: (req, res) => {
      
		db.Usuarios.findAll()
         .then(function(usuarios){
            //res.send(peliculas);
           res.render("listadoUsuarios",{usuarios:usuarios})
         })
	},
    editarUsuario: (req, res) => {
      
		res.render('editarUsuario', {
            user: req.session.userLogged /* en la vista profile va a conocer la variable user */
        });
	},
    actualiza: function(req, res) {
        

            //return res.send(req.body);
            db.Usuarios.update({
                nombre: req.body.name,
                apellido: req.body.last_name,
                mail: req.body.email,
                contrasenia:bcryptjs.hashSync(req.body.contrasenia, 10),
                imagen:req.file.filename,
            },{where:{
                id: req.params.id
            }

            
             });
             req.session.destroy();
             
             res.redirect('/users/login');
           
        

      
    },
    
    login: function(req , res){
        
        res.render('login');
    },



    updateR: function(req, res) {
        let userInDB;
        db.Usuarios.findAll({
            where: {
               mail: {[db.Sequelize.Op.eq] : req.body.email}
            }
         })
        .then(function(usuario){
            userInDB=usuario[0];
            
            

            db.Usuarios.create({
                nombre: req.body.name,
                apellido: req.body.last_name,
                mail: req.body.email,
                contrasenia:bcryptjs.hashSync(req.body.contrasenia, 10),
                imagen:req.file.filename
             });


             res.redirect('/users/login')
           /* let bodyEntero = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10), //* hashear contraseña/
                Image: req.file.filename, //* pedir el nombre que le dimos a la imagen /
            }

            User.create(bodyEntero);
        return res.redirect('/users/login')*/
        })

        /*if (userInDB) {
        return res.render('register', {
        oldData: req.body
       })
    } */   
       /*let bodyEntero = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10), //* hashear contraseña/
            Image: req.file.filename, //* pedir el nombre que le dimos a la imagen /
        }


       User.create(bodyEntero);
        return res.redirect('/users/login')*/
    },
    
    login: function(req , res){
        
        res.render('login');
    },

    processLogin: function(req , res) {
        
        let userToLogin=0;
        db.Usuarios.findAll({
            where: {
               mail: {[db.Sequelize.Op.eq] : req.body.email}
            }
         })
        .then(function(usuario){
            userToLogin=usuario[0];

            
           if(userToLogin) {
            let passIsOk = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contrasenia);
            
            
            if(passIsOk) {
                //delete userToLogin.password;
                req.session.userLogged = userToLogin; 
                //console.log("es esto" + res.locals);
                if(req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 69) * 2});
                }
                //console.log(userToLogin.id);
                

                return res.redirect('profile');
            }
          
        }


        })


        
        //req.session.userLogged = userToLogin;
       
        
       //console.log(userToLogin);
        

        /*let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let passIsOk = req.body.password.localeCompare(userToLogin.password); //bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passIsOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin; /* creo la propiedad userLogged que tiene la info de userToLogin */
                /*
                if(req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 69) * 2});
                }
                
                return res.redirect('/users/profile');
            }
        }

        /* Esto es para cuando tengamos que hacer validaciones */
        /*return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas.'
                }
            }
        })*/

        /*return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email registrado.'
                }
            }
        })*/

        /* return res.send(userToLogin); */
    },

    profile: function(req, res){
        console.log(req.cookies.userEmail);

        //res.send("estas ahi logged?" + req.locals);
        res.render('profile', {
            user: req.session.userLogged /* en la vista profile va a conocer la variable user */
        });
    },

    logout: function(req, res){
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
    
};

module.exports = usersController;