const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = require('../models/User')

const userController = {
    registro: (req, res) => {
        return res.render(path.join(__dirname, '../views/users/register'))
    },

    user: (req, res) => {
        const requestedId = req.params.id;
        const usuario =
            users.find((user) => user.id == requestedId) || users[0];
        let pathUser = path.join(__dirname,"../views/users/userPerfil");
        res.render(pathUser, { usuario })
    },

    storeUser: (req, res) => {
        const resultsValidation = validationResult(req);

        if (resultsValidation.errors.length > 0) {
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

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            avatar: req.file.filename
        }
        let userCreated = User.create(userToCreate);
        return res.render(path.join(__dirname, '../views/users/login'))
    },
    // processLogin: (req, res) => {
    //     let errors = validationResult(req);
    //     let usuarioALoguearse;
    //     if (errors.isEmpty()) {
    //         for (let i = 0; i < users.length; i++) {
    //             let usuario = users[i]
    //             if (users[i].email == req.body.email) {
    //                 usuarioALoguearse = users[i]
    //                 break;
    //             }
    //         }
    //         if (usuarioALoguearse != undefined) {
    //             //Te encontre usuario!
    //             req.session.usuarioLogueado = usuarioALoguearse;
    //             res.render(path.join(__dirname, '../views/products/store'), { products })
    //         } else {
    //             res.render(path.join(__dirname, '../views/users/login'), { errors: [{ msg: 'No se encontró al usuario o la contraseña es incorrecta' }] })
    //         }
    //     } else {
    //         res.render(path.join(__dirname, '../views/users/login'), { errors: errors.errors })

    //     }
    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    processLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (passwordOk) {
                return res.send('Ok, puedes ingresar');
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
    }
}









module.exports = userController;