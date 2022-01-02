const path = require('path');
const fs = require('fs');
let { check, validationResult, body } = require('express-validator')

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const mainController = {

    index: (req, res) => {
        const productsOfertas = products.filter(prod => ((prod.category === 'Oferta') && (prod.stock > 0)));
        const productsPromoción = products.filter(prod => ((prod.category === 'Promoción') && (prod.stock > 0)));
        res.render('index', { productsOfertas, productsPromoción });
    },

    store: (req, res) => {
        res.render(path.join(__dirname, '../views/products/store'), { products })
    },
    nuevoProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/products/productCreate'))
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
        const product =
            products.find((product) => product.id == requestedId) || products[0];
        let pathDetalle = path.join(__dirname, '../views/products/productDetail');
        res.render(pathDetalle, { product })

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
        const producto = req.params.id;
        const product = products.find((product) => (product.id == producto)) || products[0];
        let pathEdit = path.join(__dirname, '../views/products/productEdit');
        res.render(pathEdit, { product, })
    },

    // Update - Method to update
    update: (req, res) => {
        // Leemos el id que viene por url
        const productId = req.params.id;

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
    search: (req,res) => {
        return  res.send("resultado de la busqueda" )
    }


}

module.exports = mainController;