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

const validaciones = require('../middlewares/validationsMiddleware');



// Formulario de registro
router.get('/registro', userController.registro);

//Procesar el registro
router.post('/registro', uploadFile.single('avatar'), validaciones, userController.storeUser);

// Formulario de login
router.get('/login', userController.login);

//Procesar Login
// router.get('/profile/:userId', usersController.profile);


// Perfil de Usuario

module.exports = router;