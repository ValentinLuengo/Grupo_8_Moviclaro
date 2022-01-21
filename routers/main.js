const express = require('express');

const multer = require('multer');
const mainController = require('../controllers/mainControllers.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js')
let router = express.Router();
const path = require('path')
const pubiclPath = path.resolve(__dirname, './public');
const { check } = require('express-validator');
const validations = require('../middlewares/productMiddleware.js');



/**Para subir las imagenes */

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/products');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + - +Date.now() + path.extname(file.originalname));
    }

})

const uploadFile = multer({ storage });


router.get('/', mainController.index);

router.get('/store', mainController.store);


// Pienso que deberia haber un middleware para administrador... Pero no se si es acá.
router.get('/nuevoProducto', mainController.nuevoProducto);

router.get('/detalle/:id', mainController.productDetail);


/*Crear producto*/

// Pienso que deberia haber un middleware para administrador... Pero no se si es acá.
router.post('/nuevoProducto', uploadFile.single('image'), validations,  mainController.storeProduct);

router.get('/edit/:id', uploadFile.single('image'), mainController.edit);

router.put('/edit/:id', uploadFile.single('image'), validations, mainController.update);

// Borrar producto
router.delete('/:id', mainController.destroy);

router.get('/agregarCarrito', mainController.agregarCarrito);

//barra de búsqueda

router.post('/search', mainController.search);

module.exports = router;