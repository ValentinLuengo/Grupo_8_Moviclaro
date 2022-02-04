const express = require('express');
const mainController = require('../../controllers/mainControllers');
const router = express.Router();




//Api listar productos

router.get('/api/products', mainController.list)

//Api detalle de un producto
router.get('/api/products/:id', mainController.show)


//Api ultimo producto creado

router.get('/api/lastProductCreated', mainController.lastProductCreated);


//Totales de productos por marca


router.get('/api/totals', mainController.totals);




module.exports = router;