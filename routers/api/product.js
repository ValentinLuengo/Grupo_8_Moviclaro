const express = require('express');
const mainController = require('../../controllers/mainControllers');
const router = express.Router();




//Api listar productos

router.get('/api/products', mainController.list)

//Api detalle de un producto
router.get('/api/products/:id', mainController.show)


//Api ultimo usuario creado

router.get('/api/lastProductCreated', mainController.lastProductCreated)


module.exports = router;