const express = require('express');
const multer = require('multer');
const mainController = require('../controllers/mainControllers.js');
let router = express.Router();
const path = require('path')
const pubiclPath = path.resolve(__dirname, './public');


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



router.get('/nuevoProducto', mainController.nuevoProducto);

router.get('/login', mainController.login);

router.get('/detalle/:id', mainController.productDetail);

router.get('/registro', mainController.registro);

router.get('/agregarCarrito', mainController.agregarCarrito);

/*Crear producto*/

router.post('/storeProduct', uploadFile.single('image'), mainController.storeProduct);

router.post('/storeUser', uploadFile.single('image'), mainController.storeUser);


router.get('/edit/:id', mainController.edit);

router.put('/edit/:id', mainController.update);

// Borrar producto
router.delete('/:id', mainController.destroy);


module.exports = router;