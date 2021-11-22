const express = require('express');
const multer = require('multer');
const mainController = require('../controllers/mainControllers.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js')
let router = express.Router();
const path = require('path')
const pubiclPath = path.resolve(__dirname, './public');
const {check} = require('express-validator');



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

const validaciones = [
    
    check('email').notEmpty().withMessage('Ingresá el email!').bail().isEmail().withMessage('Ingresá un email válido'),
    check('password').notEmpty().withMessage('Ingresá la contraseña!')
]


router.get('/', mainController.index);

router.get('/store', mainController.store);



router.get('/nuevoProducto', mainController.nuevoProducto);

router.get('/login', mainController.login);

router.post('/login',validaciones,mainController.processLogin)

router.get('/detalle/:id', mainController.productDetail);

router.get('/registro', guestMiddleware, mainController.registro);

router.get('/agregarCarrito', mainController.agregarCarrito);

/*Crear producto*/

router.post('/storeProduct', uploadFile.single('image'), mainController.storeProduct);

router.post('/storeUser', uploadFile.single('image'), mainController.storeUser);


router.get('/edit/:id',uploadFile.single('image'), mainController.edit);

router.put('/edit/:id',uploadFile.single('image'), mainController.update);

// Borrar producto
router.delete('/:id', mainController.destroy);


module.exports = router;