const path = require('path');
const fs = require('fs');

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: (req, res) => {
        const productsOfertas = products.filter(prod => prod.category === 'oferta');
        const productsPromocion = products.filter(prod => prod.category === 'promocion');
        res.render('home', { productsOfertas, productsPromocion });
    },

    index: (req, res) => {
        res.render('index', { products })
    },
    nuevoProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/products/productCreate'))
    },

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
    },
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

    registro: (req, res) => {
        res.render(path.join(__dirname, '../views/users/register'))
    },
    create: (req, res) => {
        res.render(path.join(__dirname, '../views/products/productCreate'));
    },


    edit: (req, res) => {

        res.render(path.join(__dirname, '../views/products/productEdit'))

    },
    // Update - Method to update
    update: (req, res) => {

        res.send("Producto editado")
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        res.send("Producto eliminado")
    }


}

module.exports = mainController;