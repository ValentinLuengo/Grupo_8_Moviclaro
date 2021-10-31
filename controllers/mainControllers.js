const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');
let products = require('../data/products.json')

const mainController = {
    index: (req, res) => {
        res.render(path.join(__dirname, '../views/index'), {products})
          
    },
    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    productDetail: (req, res) => {
        const requestedId = req.params.id; 
        const product =
        products.find((product) => product.id == requestedId) || products[0];
        res.render(path.join(__dirname, '../views/products/productDetail', {product}))   
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
        res.render(path.join(__dirname, '../views/products/productEdit'));
    }

}

module.exports = mainController;

/* 

app.get('/', (req, res) => {
    res.render('index')
});
 app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/detalle', (req, res) => {
    res.render('productDetail')
});
app.get('/carrito', (req, res) => {
    res.render('productCart')
});
app.get('/registro', (req, res) => {
    res.render('register')
});

app.post('/compra', function(req, res){
    res.redirect('./')
})
app.post('/agregarCarrito', function(req, res){
    res.render(__dirname, 'productCart')
})
*/