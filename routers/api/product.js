const express = require('express');
const productApiController = require('../../controllers/api/productApiController');
const router = express.Router();

//Api listar productos
router.get('/api/products', productApiController.list)

//Api detalle de un producto
router.get('/api/products/:id', productApiController.show)

//Api ultimo producto creado
router.get('/api/lastProductCreated', productApiController.lastProductCreated);

//Totales de productos por marca
router.get('/api/totals', productApiController.totals);


module.exports = router;