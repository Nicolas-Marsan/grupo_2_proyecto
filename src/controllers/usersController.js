const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const bcryptjs = require('bcryptjs'); //*hasheare contra/
const db = require("../database/models");
const { validationResult }= require('express-validator');
const { Op } = require("sequelize");

const usersController = {
    register: function (req , res){
        res.cookie('testing', '¡Hola mundo!');
        res.render('register');
    },

    all: (req, res) => {
      
		db.Usuarios.findAll(
            {
                where:{
                    mail: {[Op.like]: '%' + req.query.mail + '%'}             
                }
            })
         .then(function(usuarios){
            //res.send(peliculas);
           return res.status(200).json(usuarios);
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
            console.log(userInDB);
            
            if(userInDB){
                return res.render('register', {oldData: req.body,
                    errors:{
                        email: {
                            msg: 'Este mail ya se encuentra en uso',
                        }
                    }
                })
            }
        })

        const resultadoValidaciones = validationResult(req);

        if (resultadoValidaciones.errors.length > 0) {
            return res.render('register.ejs', {
                errors: resultadoValidaciones.mapped(),
                oldData: req.body,
            })
        } else {
            let imagen;

        if(req.file){
            imagen = req.file.filename
        } else {
            imagen = null;
        }


        db.Usuarios.create({
            nombre: req.body.name,
            apellido: req.body.last_name,
            mail: req.body.email,
            contrasenia:bcryptjs.hashSync(req.body.contrasenia, 10),
            imagen:imagen
            });


            res.redirect('/users/login')
        }
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
            }else{
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas.'
                        }
                    }
                })
            } 
        }
        })
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