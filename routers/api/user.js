const express = require('express');
const router = express.Router();

const userApiController = require('../../controllers/api/userApiController');

//Api listado de usuarios
router.get('/api/users', userApiController.list);

//Api detalle de un usuario
router.get('/api/users/:id', userApiController.show);

module.exports = router;