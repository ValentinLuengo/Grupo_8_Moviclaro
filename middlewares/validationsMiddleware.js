const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Debes escribir tu nombre'),
    body('apellido').notEmpty().withMessage('Debes escribir tu apellido'),
    body('email').notEmpty().withMessage('El mail es obligatorio').bail()
    .isEmail().withMessage('Debe ser un formato de correo válido'),
    body('celular').notEmpty().withMessage('Debes poner tu numero de celular'),
    body('pais').notEmpty().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Es necesario una contraseña'),
    body('password2').notEmpty().withMessage('Es necesario reescribir la contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let acceptedExtension = ['.jpg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
                throw new Error(`Los formatos permitidos son ${acceptedExtension.join(', ')}`)
            };
        };
        return true;
    })
];