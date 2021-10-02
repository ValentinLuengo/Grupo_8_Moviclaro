const express = require('express');
const path = require('path');
const app = express();

// const publicPath = path.resolve(__dirname, './public')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});
app.get('/detalle', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.use(express.static('Design'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})