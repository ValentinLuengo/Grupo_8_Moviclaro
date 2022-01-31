const express = require('express');
const router = express.Router();



const userController = require('../../controllers/userControllers');



//Api listado de usuarios
router.get('/api/users', userController.list);

//Api detalle de un usuario
router.get('/api/users/:id', userController.show);

module.exports = router;