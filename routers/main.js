const express = require('express');
const mainController = require('../controllers/mainControllers.js');
let router = express.Router(); /*este metidi permite crear rutas montables y desmontables en la aplicacion*/

// Presentacion

router.get('/', mainController.index);

router.get('/store', mainController.store);

router.get('/nuevoProducto', mainController.nuevoProducto);

router.get('/login', mainController.login);

router.get('/detalle/:id', mainController.productDetail);

router.get('/registro', mainController.registro);

router.get('/agregarCarrito', mainController.agregarCarrito);

router.get('/create', mainController.create);

router.post('/edit', mainController.edit);

router.post('./update', mainController.update);


module.exports = router;