const path = require('path');
const fs = require('fs');

const publicPath = path.resolve(__dirname, './public');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const mainController = {

    index: (req, res) => {
        const productsOfertas = products.filter(prod => prod.category === 'oferta');
        const productsPromocion = products.filter(prod => prod.category === 'promocion');
        res.render('index', { productsOfertas, productsPromocion });
    },

    store: (req, res) => {
        res.render(path.join(__dirname, '../views/products/store'), { products })
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
    },

    //Create - Create one product in DB
    storeProduct: (req, res) => {
		const product = req.body;
		product.id = products[products.length-1].id+1;
		product.image = req.file.filename;
		products.push(product);
		
		//const productodatbase = fsJSON.stringify(products)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
		
		
		res.redirect('/')
	},
    //Crear un usuario en la archivo users.json
    storeUser: (req, res) => {
		const user = req.body;
		user.id = users[users.length-1].id+1;
		users.push(user);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '))
		
		
		res.redirect('/')
	}


}

module.exports = mainController;