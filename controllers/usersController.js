const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const bcryptjs = require('bcryptjs'); //*hasheare contra/

const usersController = {
    register: function (req , res){
        res.cookie('testing', '¡Hola mundo!');
        res.render('register');
    },

    updateR: function(req, res) {
        
        /* let userInDB = User.findByField('email', req.body.email);
        if (userInDB) {
        return res.render('register', {
        oldData: req.body
       })
    } */   
       let bodyEntero = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10), //* hashear contraseña/
            Image: req.file.filename, //* pedir el nombre que le dimos a la imagen /
        }


       User.create(bodyEntero);
        return res.redirect('/users/login')
    },
    
    login: function(req , res){
        
        res.render('login');
    },

    processLogin: function(req , res) {
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let passIsOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passIsOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin; /* creo la propiedad userLogged que tiene la info de userToLogin */
                
                if(req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 69) * 2});
                }
                
                return res.redirect('/users/profile');
            }
        }

        /* Esto es para cuando tengamos que hacer validaciones */
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas.'
                }
            }
        })

        return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email registrado.'
                }
            }
        })

        /* return res.send(userToLogin); */
    },

    profile: function(req, res){
        console.log(req.cookies.userEmail);

        //res.send(req.session.userLogged.name);
        res.render('profile', {
            user: req.session.userLogged /* en la vista profile va a conocer la variable user */
        });
    },

    logout: function(req, res){
        req.session.destroy();
        return res.redirect('/');
    }
    
};

module.exports = usersController;