const path = require('path');
const fs = require('fs');

let { check, validationResult, body } = require('express-validator')

// Traigo los modulos para acceder a la db.
const db = require('../database/models');
const { promiseImpl } = require('ejs');
const sequelize = db.sequelize;

const publicPath = path.resolve(__dirname, './public');


const mainController = {

    index: (req, res) => {
        let offersProducts = [];
        let promotionsProducts = []
        db.Product.findAll({
                where: { product_categories_id: 1 },
                include: ['colors', 'brands', 'product_categories']
            })
            .then(products1 => {
                offersProducts = products1
                db.Product.findAll({
                        where: { product_categories_id: 2 },
                        include: ['colors', 'brands', 'product_categories']
                    })
                    .then(products2 => {
                        promotionsProducts = products2;
                        res.render('index', { promotionsProducts, offersProducts })
                    })
            })
            .catch(error => console.log(error))
    },
    store: (req, res) => {
        let color = db.Color.findAll()
        let category = db.ProductCategory.findAll()
        let brand = db.Brand.findAll()
        let product = db.Product.findAll({
            include: ['colors', 'brands', 'product_categories']
        })
        Promise.all([product, color, category, brand])
            .then(function([product, color, category, brand]) {
                res.render(path.join(__dirname, '../views/products/store'), { product: product, color: color, category: category, brand: brand })
            })
            .catch(error => console.log(error))

    },
    nuevoProducto: (req, res) => {
        let color = db.Color.findAll()
        let category = db.ProductCategory.findAll()
        let brands = db.Brand.findAll()

        Promise.all([color, category, brands])
            .then(function([color, category, brands]) {
                res.render('products/productCreate', { color: color, category: category, brands: brands })
            })
    },

    storeProduct: (req, res) => {
        db.Product.create({
            brand_id: req.body.marca,
            model: req.body.modelo,
            stock: req.body.stock,
            price: req.body.precio,
            image: req.file.filename,
            product_categories_id: req.body.category,
            color_id: req.body.color,
            description: req.body.descripcion,
        })
        res.redirect("/store")
    },

    edit: (req, res) => {
        let color = db.Color.findAll()
        let category = db.ProductCategory.findAll()
        let brands = db.Brand.findAll()
        let id = req.params.id
        let product = db.Product.findByPk(id, {
            include: [{ association: "brands" }, { association: "colors" }, { association: "product_categories" }]
        })
        Promise.all([product, color, category, brands])
            .then(function([product, color, category, brands]) {
                res.render("products/productEdit", { product: product, color: color, category: category, brands: brands })
            })
    },

    update: (req, res) => {
        db.Product.update({
            brand_id: req.body.marca,
            model: req.body.modelo,
            stock: req.body.stock,
            price: req.body.precio,
            image: req.file ? req.file.filename : req.body.oldImage,
            product_categories_id: req.body.category,
            color_id: req.body.color,
            description: req.body.descripcion,
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            // res.render("/detalle/" + req.params.id)
            res.redirect("/detalle/" + req.params.id)
        }).catch(err => console.log(err))
    },

    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/store")
    },


    /*  login: (req, res) => {
         res.render(path.join(__dirname, '../views/users/login'))
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
                 if (req.body.recordame != undefined) {
                     res.cookie('recordame', usuarioALoguearse.email)
                 }
                 res.render(path.join(__dirname, '../views/products/store'), { products })
             } else {
                 res.render(path.join(__dirname, '../views/users/login'), { errors: [{ msg: 'No se encontró al usuario o la contraseña es incorrecta' }] })
             }
         } else {
             res.render(path.join(__dirname, '../views/users/login'), { errors: errors.errors })

         }


     }, */

    productDetail: (req, res) => {
        const requestedId = req.params.id;
        let pathDetalle = path.join(__dirname, '../views/products/productDetail');
        db.Product.findByPk(requestedId, {
                include: ['colors', 'brands', 'product_categories']
            })
            .then(product => {
                res.render(pathDetalle, { product })
            })
            .catch(error => console.log(error))

        // const requestedId = req.params.id;
        // const product =
        //     products.find((product) => product.id == requestedId) || products[0];
        // let pathDetalle = path.join(__dirname, '../views/products/productDetail');
        // res.render(pathDetalle, { product })

    },

    agregarCarrito: (req, res) => {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },

    // registro: (req, res) => {
    //     res.render(path.join(__dirname, '../views/users/register'))
    // },
    create: (req, res) => {
        res.render(path.join(__dirname, '../views/products/productCreate'));
    },


    // Update - Method to update

    //Create - Create one product in DB


    // Delete - Delete one product from DB

    //Crear un usuario en la archivo users.json
    storeUser: (req, res) => {

        return res.send(req.body);



        // const user = req.body;
        // if (user.password != user.password2) {
        //     res.send("las contraseñas no coinciden")
        // } else {
        //     user.id = users[users.length - 1].id + 1;
        //     users.push(user);
        //     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '))
        //     res.redirect('/')
        // }
    },
    search: (req, res) => {
        return res.send("resultado de la busqueda")
    }


}

module.exports = mainController;