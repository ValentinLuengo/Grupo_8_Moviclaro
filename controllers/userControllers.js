const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = require('../models/User')
let db = require("../database/models");


const userController = {
    registro: (req, res) => {
        let countries = db.Country.findAll()
         .then(function(countries){
            res.render("users/register", {countries:countries})

         })
       
    },
    
    storeUser: (req, res) => {
        const resultsValidation = validationResult(req)
        const countries = db.Country.findAll()
        let userInDb =   db.User.findOne({
             where: {
             email: req.body.email
             }
             })

        Promise.all([userInDb, countries]).then(function([userInDb, countries]) {

            if (resultsValidation.errors.length > 0) {
                return res.render(path.join(__dirname, '../views/users/register'), {
                    errors: resultsValidation.mapped(),
                    oldData: req.body,
                    countries: countries
    
                }) ;
            }
            if (userInDb) {
                return res.render(path.join(__dirname, '../views/users/register'), {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body,
                    countries: countries
                });
            }
    
            if (req.body.password !== req.body.password2) {
                return res.render(path.join(__dirname, '../views/users/register'), {
                    errors: {
                        password2: {
                            msg: 'Las contraseñas no coinciden'
                        }
                    },
                    oldData: req.body,
                    countries: countries
                });
            } 
            
            db.User.create({

                include:[ "countries"],
                name:req.body.name,
                last_name: req.body.last_name,
                category_id: 1,
                image: req.file.filename,
                country_id: req.body.country_id,
                password: bcryptjs.hashSync(req.body.password, 10),
                email: req.body.email,
                phone: req.body.phone 
    
            })
            return res.render(path.join(__dirname, '../views/users/login'))
            
        })
        
    },    

 
        
    
    login: (req, res) => {

        res.render(path.join(__dirname, '../views/users/login'))
    },
    processLogin: (req, res) => {
        let userToLogin;
        let userAdmin;
          
         db.User.findOne({
            include: ['countries'],
             where: {
             email: req.body.email
             }
             }).then((resultado)=> {
                  userToLogin = resultado;
                  if (userToLogin.email ) {
                     userAdmin = userToLogin.category_id;
                     let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                     if (passwordOk) {
                         delete userToLogin.password
                         delete userToLogin.password2
                         req.session.userLogged = userToLogin;
         
                         if (req.body.recordame) {
                             res.cookie('userEmail', req.body.email, { maxAge: 1000 * 300 });
         
                         }
         
                         return res.redirect('/');
         
                     }
                     return res.render((path.join(__dirname, '../views/users/login')), {
                         errors: {
                             email: {
                                 msg: 'Las credenciales son inválidas'
                             }
                         }
                     });
                 }
                 return res.render((path.join(__dirname, '../views/users/login')), {
                     errors: {
                         email: {
                             msg: 'No se encuentra este mail'
                         }
                     }
                 });
                 
         })
         
           //  let userToLogin = User.findByField('email', req.body.email);
          //   console.log("se guardo el mail del json" +userToLogin)
         //    let userAdmin = User.findByField('category_id', '2');
            // console.log("se guardo el userAdmin: "+ userAdmin)
     
     
    },
    user: (req, res) => {
        console.log(req.session.email)
        //return res.render(path.join(__dirname, "../views/users/userPerfil"), {user
       
    
    },

    logout: (req, res) => {

            res.clearCookie('userEmail')
            req.session.destroy();

            res.redirect('/');
        },
        // user: (req, res) => {
        //     const requestedId = req.params.id;
        //     const usuario =
        //         users.find((user) => user.id == requestedId) || users[0];
        //     let pathUser = path.join(__dirname, "../views/users/userPerfil");
        //     res.render(pathUser, { usuario })
    
    

//eliminar un usuario
    destroy: (req,res) => {
        const userId = req.params.id;
        db.User.destroy({
            where:{ id: userId}
        })
        .then(() => {
            res.clearCookie(req.params.email)
            req.session.destroy();
        res.redirect('/');
    })},
//abrir pagina de edición de usuario
    /*edit: (req,res) =>{
        db.User.findOne({
            where: {id: req.params.id},
            include: ['countries']
            })
            Promise.all([user,userCategory, country])
            .then((user, country, userCategory)=> {
                console.log(user.image);
             })
     },*/

     edit: function(req,res) {
            
            let country = db.Country.findAll();
            let userId = req.params.id;
            let user = db.User.findByPk(userId,{
            include:[{association: "countries"}]
            })
            Promise.all([user, country])
            .then(([user, country]) => {
                res.render("users/userEdit", {user:user, country:country})})
            .catch(error => res.send(error))
        },

//guardar datos editados el usuario

     update: (req, res) => {
        let userId = req.params.id
        
        db.User.update({
                name: req.body.name,
                last_name: req.body.last_name,
                image: req.file ? req.file.filename : req.body.oldImage,
                email: req.body.email,
                phone: req.body.phone, 
                country_id:req.body.country_id
                },
            {
                where: {id: userId}
            }) 
            .then(() => {
                return res.redirect('/user')
            
            })
        }
      

    }





module.exports = userController;