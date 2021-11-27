const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const cookies = require('cookie-parser')

app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const publicPath = path.resolve(__dirname, './public');
const session = require('express-session');

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
// let mainController = require('./routers/main.js');
// const cookieParser = require('cookie-parser');

// let mainController = require('./routers/main.js')

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);





app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000 ')
});

const main = require('./routers/main');
const userRoutes = require('./routers/userRoutes');
const cookieParser = require('cookie-parser');

app.use('/', main);
app.use('/', userRoutes);