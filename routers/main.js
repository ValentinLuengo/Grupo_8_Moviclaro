const express = require('express');
const mainController = require('../controllers/mainControllers.js');
let  router = express.Router(); /*este metidi permite crear rutas montables y desmontables en la aplicacion*/



router.get('/',mainController.index);

router.get('/login', mainController.login); 

router.get('/productDetail', mainController.productDetail);

router.post('/agregarCarrito', mainController.agregarCarrito);

router.post('/registro', mainController.registro);

router.post('/compra',mainController.index);

router.post('/agregarCarrito', mainController.index);

router.post('/login', mainController.index);

module.exports = router;