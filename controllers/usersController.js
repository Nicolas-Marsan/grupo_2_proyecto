const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const bcryptjs = require('bcryptjs'); //*hasheare contra/

const usersController = {
    register: function (req , res){
        /* let htmlPath = path.join(__dirname,'../views/register.html' );
        res.sendFile(htmlPath); */
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
        /* let htmlPath = path.join(__dirname,'../views/login.html' );
        res.sendFile(htmlPath); */
        res.render('login');
    },
    processLogin: function(req , res) {
        
    }
    
};

module.exports = usersController;