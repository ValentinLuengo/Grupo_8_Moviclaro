const path = require('path');
const fs = require('fs');

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    index: (req, res) => {
        res.render('index', { products })
    },
    productDetail: (req, res) => {
        const product = products.find((prod) => prod.id == req.params.id);
        res.render('productDetail', { product });
    },

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'))
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