const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('modelo')
        .notEmpty()
        .withMessage('Debes escribir el modelo')
        .isLength({min: 4})
        .withMessage('El nombre del modelo debe tener al menos 5 caracteres'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes escribir una descripción')
        .isLength({min: 20})
        .withMessage('La descripción debe tener al menos 18 caracteres'),
    body('image')
        .custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let acceptedExtension = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
                throw new Error(`Los formatos permitidos son ${acceptedExtension.join(', ')}`)
            };
        };
        return true;
    })

];