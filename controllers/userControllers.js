const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator')

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {


    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
    },

    registro: (req, res) => {
        return res.render(path.join(__dirname, '../views/users/register'))
    },

    storeUser: (req, res) => {

        const resultsValidation = validationResult(req);
        if (resultsValidation.errors.length > 0) {
            return res.render(path.join(__dirname, '../views/users/register'), {
                errors: resultsValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('Ok, las se pasaron y no tienes errores');


    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        let usuarioALoguearse;
        if (errors.isEmpty()) {
            for (let i = 0; i < users.length; i++) {
                let usuario = users[i]
                if (users[i].email == req.body.email) {
                    usuarioALoguearse = users[i]
                    break;
                }
            }
            if (usuarioALoguearse != undefined) {
                //Te encontre usuario!
                req.session.usuarioLogueado = usuarioALoguearse;
                res.render(path.join(__dirname, '../views/products/store'), { products })
            } else {
                res.render(path.join(__dirname, '../views/users/login'), { errors: [{ msg: 'No se encontró al usuario o la contraseña es incorrecta' }] })
            }
        } else {
            res.render(path.join(__dirname, '../views/users/login'), { errors: errors.errors })

        }


    }



}

module.exports = userController;