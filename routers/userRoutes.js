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
//agego un comentario para actualizar





const userController = require('../controllers/userControllers');

const uploadFile = require('../middlewares/userMulter');
// const validations = require('../middlewares/validationsMiddleware');

const validations = require('../middlewares/validationsMiddleware');



// Formulario de registro
router.get('/registro', guestMiddleware, userController.registro);

//Procesar el registro
router.post('/registro', uploadFile.single('image'), validations, userController.storeUser);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

//Procesar Login
router.post('/login', userController.processLogin);

// router.get('/profile/:userId', usersController.profile);

router.post('/login', userController.processLogin)


// Perfil de Usuario
router.get('/user', authMiddleware, userController.user);

//Eliminar usuario
router.delete('/user/:id', userController.destroy);

//Editar usuario
router.post('/user/:id', userController.edit);
router.put('/user/:id', uploadFile.single('image'), userController.update);

// Logout
router.get('/logout', userController.logout);

module.exports = router;