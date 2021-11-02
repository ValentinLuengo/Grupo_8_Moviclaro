const path = require('path');
const fs = require('fs');

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
        res.render('index', { products })
    },

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    productDetail: (req, res) => {
          const requestedId = req.params.id; 
         const product =
         products.find((product) => product.id == requestedId) || products[0]; 
         let pathDetalle = path.join(__dirname, '../views/products/productDetail');
         res.render(pathDetalle, {product})
         


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
        res.render('../views/products/productEdit');
    }

}

module.exports = mainController;