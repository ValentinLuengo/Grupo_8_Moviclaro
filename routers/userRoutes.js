const express = require('express');
const router = express.Router();
// const express = require('express');
const multer = require('multer');
// const mainController = require('../controllers/mainControllers.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
// let router = express.Router();
const path = require('path')
const pubiclPath = path.resolve(__dirname, './public');
const { body } = require('express-validator');





const userController = require('../controllers/userControllers');

const uploadFile = require('../middlewares/userMulter');
// const validations = require('../middlewares/validationsMiddleware');

const validaciones = [
    body('nombre').notEmpty().withMessage('Este campo es obligatorio'),
    body('apellido').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').notEmpty().withMessage('Este campo es obligatorio'),
    body('celular').notEmpty().withMessage('Este campo es obligatorio'),
    body('pais').notEmpty().withMessage('Este campo es obligatorio'),

    body('password').notEmpty()
]



// Formulario de registro
router.get('/registro', userController.registro);

//Procesar el registro
router.post('/registro', uploadFile.single('avatar'), validaciones, userController.storeUser);

// Formulario de login
router.get('/login', userController.login);

//Procesar Login
// router.get('/profile/:userId', usersController.profile);


// Perfil de Usuario
router.get("/user/:id",userController.user)

module.exports = router;