const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('modelo')
        .notEmpty()
        .withMessage('Debes escribir el modelo (Back-End)')
        .isLength({min: 4})
        .withMessage('El nombre del modelo debe tener al menos 5 caracteres (Back-End) '),
    body('precio')
        .notEmpty()
        .withMessage('Precio de producto obligatorio (Back-End)'),
    body('stock')
        .notEmpty()
        .withMessage('Seleccione cantidad (Back-End)'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes escribir una descripción (Back-End)')
        .isLength({min: 20})
        .withMessage('La descripción debe tener al menos 18 caracteres (Back-End)'),
    body('image')
        .custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen (Back-End)');
        } else {
            let acceptedExtension = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
            throw new Error(`Los formatos permitidos son ${acceptedExtension.join(', ')} (Back-End)`)
            };
        };
        console.log("midd------------------------------------");
        return true;
    })

];