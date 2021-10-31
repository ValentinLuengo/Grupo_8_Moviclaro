const express = require('express');
const mainController = require('../controllers/mainControllers.js');
let router = express.Router(); /*este metidi permite crear rutas montables y desmontables en la aplicacion*/



router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/detalle/:id', mainController.productDetail);

router.get('/registro', mainController.registro);

router.post('/agregarCarrito', mainController.agregarCarrito);

router.post('/compra', mainController.index);

router.post('/agregarCarrito', mainController.index);

router.post('/login', mainController.index);
router.post('/registro', mainController.index);

router.get('/create', mainController.create);

router.get('/edit', mainController.edit);

module.exports = router;