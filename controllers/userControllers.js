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

        return res.render(path.join(__dirname, '../views/users/register'))
    },



    storeUser: (req, res) => {
        const resultsValidation = validationResult(req);

        if (resultsValidation.errors.length > 0) {
            console.log(req.body)
            return res.render(path.join(__dirname, '../views/users/register'), {
                errors: resultsValidation.mapped(),
                oldData: req.body

            });
        }

        let userInDb = User.findByField('email', req.body.email);
        if (userInDb) {
            return res.render(path.join(__dirname, '../views/users/register'), {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }

        if (req.body.password !== req.body.password2) {
            return res.render(path.join(__dirname, '../views/users/register'), {
                errors: {
                    password2: {
                        msg: 'Las contraseñas no coinciden'
                    }
                },
                oldData: req.body
            });
        }
        /*esto es lo nuevo*/
        db.Users.create({
            name:req.body.name,
            last_name: req.body.name,
            category_id: 1,
            image: req.file.filename,
            country_id: 1,
            password: bcryptjs.hashSync(req.body.password, 10),
            email: req.body.email,
            phone: req.body.phone 

        })

       /* esto es lo nuevo*/
        
        /* Esto es lo viejo que guarda en el JSON:

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            image: req.file.filename,
            category_id: "1"
        }
        let userCreated = User.create(userToCreate);
        
        Esto es lo viejo que guarda en el JSON: */
        return res.render(path.join(__dirname, '../views/users/login'))
    },
    login: (req, res) => {

        res.render(path.join(__dirname, '../views/users/login'))
    },
    processLogin: (req, res) => {
   let userToLogin;
   let userAdmin;
     
    db.Users.findOne({
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
    
                    return res.redirect('/user');
    
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

        return res.render(path.join(__dirname, "../views/users/userPerfil"), {
            user: req.session.userLogged
        })
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

    destroy: (req,res) => {
        const userId = req.params.id;
        db.Users.destroy({
            where:{ id: userId}
        })
        res.redirect('/');
    }
}









module.exports = userController;