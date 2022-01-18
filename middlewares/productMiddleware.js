const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('modelo')
        .notEmpty()
        .withMessage('Debes escribir el modelo')
        .isLength({min: 5}),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes escribir una descripción')
        .isLength({min: 20}),
    body('image')
        .notEmpty()
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
        return false;
    })

];