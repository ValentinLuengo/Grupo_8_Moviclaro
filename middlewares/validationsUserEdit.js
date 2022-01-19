const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('name')
        .notEmpty()
        .withMessage('Debes escribir tu nombre')
        .isLength({min: 2}),
    body('last_name')
        .notEmpty()
        .withMessage('Debes escribir tu apellido')
        .isLength({min: 2}),
    body('email')
        .notEmpty()
        .withMessage('El mail es obligatorio')
        .bail()
        .isEmail()
        .withMessage('Debe ser un formato de correo válido'),
    body('phone')
        .notEmpty()
        .withMessage('Debes poner tu numero de celular'),
    body('country_id')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),
    body('password')
        .notEmpty()
        .withMessage('Es necesario una contraseña')
        .isLength({min : 8})
        .withMessage('Debe contener al menos 8 caracteres'),
    body('password2')
        .notEmpty()
        .withMessage('Es necesario reescribir la contraseña'),
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
            return false;
            })
        ]
