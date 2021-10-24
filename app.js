const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
const publicPath = path.resolve(__dirname, './public');
app.set('view engine', 'ejs');

let mainController = require('./routers/main.js')

app.use('/', mainController);




 
/***texto nuevo 
let mainController = require('./routers/main.js')

app.use('/', mainController);
/**texto nuevo */

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})