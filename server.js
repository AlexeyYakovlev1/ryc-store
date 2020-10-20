const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const csrf = require('csurf');
const config = require('config');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const varMiddleware = require('./src/middleware/variables');
const userMiddleware = require('./src/middleware/user');
const homeRoutes = require('./src/routes/home');
const saleRoutes = require('./src/routes/sale');
const authRoutes = require('./src/routes/auth');
const cartRoutes = require('./src/routes/cart');
const productsRoutes = require('./src/routes/products');
const designRoutes = require('./src/routes/design');

const URI = config.get('URI');

const app = express();

const store = new MongoStore({
    collection: 'sessions',
    uri: URI
})

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.static(path.join(__dirname, './src/assets/img')));
app.use(express.static(path.join(__dirname + './src/images-products')))
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false,
    store
}));

app.use(csrf());
app.use(flash());
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRoutes);
app.use('/sale', saleRoutes);
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/shop', productsRoutes);
app.use('/design', designRoutes);

const PORT = process.env.PORT || config.get('port');

const start = async() => {
    try {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log('server has been started'));
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

start();