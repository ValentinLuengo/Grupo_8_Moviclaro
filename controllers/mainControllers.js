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
        db.Product.findAll({
                include: ['colors', 'brands', 'product_categories']
            })
            .then(products => {
                res.render(path.join(__dirname, '../views/products/store'), { products })
            })
            .catch(error => console.log(error))

    },
    nuevoProducto: (req, res) => {
        let color = db.Color.findAll()
        let category = db.ProductCategory.findAll()

        Promise.all([color, category])
            .then(function([color, category]) {
                res.render('products/productCreate', { color: color, category: category })
            })
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

    edit: (req, res) => {
        const producto = db.params.id;
        const product = products.find((product) => (product.id == producto)) || products[0];
        let pathEdit = path.join(__dirname, '../views/products/productEdit');
        res.render(pathEdit, { product, })
    },

    // Update - Method to update
    update: (req, res) => {
        // Leemos el id que viene por url
        const product = req.params.id;

        // buscamos la posicion del producto que queremos editar
        const productIndex = products.findIndex((p) => p.id == productId);

        // Generamos el producto actualizado
        const updatedProduct = {
            ...products[productIndex],
            ...req.body,
            precio: Number(req.body.precio),
            image: req.file ? req.file.filename : products[productIndex].image
                // image: req.file.filename

        };

        // Reemplazamos el objeto en el array
        products[productIndex] = updatedProduct;



        // Escribimos en el JSON para persistir
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
            // Volvemos a la pagina de productos

        res.redirect('/store')


    },
    //Create - Create one product in DB
    storeProduct: (req, res) => {
        const product = req.body;
        product.id = products[products.length - 1].id + 1;
        product.image = req.file.filename;
        products.push(product);

        //const productodatbase = fsJSON.stringify(products)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))


        res.redirect('/')
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Leer el id
        const productId = req.params.id;
        // Buscar la posicion actual del producto a eliminar
        const productIndex = products.findIndex((p) => p.id == productId);
        // Recortar el array sin ese producto
        products.splice(productIndex, 1);
        // Guardar en el json el nuevo array
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('/store');
        // res.send("Producto eliminado")
    },
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