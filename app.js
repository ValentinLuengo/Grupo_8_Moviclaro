const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const cookies = require('cookie-parser')
const bodyparser = require('body-parser');

const cors = require('cors');
app.use(cors())

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

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


const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001 ')
});

const main = require('./routers/main');
const userRoutes = require('./routers/userRoutes');
const cookieParser = require('cookie-parser');
const apiUserRoutes = require('./routers/api/user');
const apiProductRoutes = require('./routers/api/product');

app.use('/', main);
app.use('/', userRoutes);
app.use('/', apiUserRoutes);
app.use('/', apiProductRoutes);