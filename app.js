const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));
const publicPath = path.resolve(__dirname, './public');


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
let mainController = require('./routers/main.js')

app.use('/', mainController);


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000 ')
})