const { Router } = require('express');
const Product = require('../models/product');
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const mapCartItems = (cart) => {
    return cart.items.map(p => ({
        ...p.productId._doc,
        id: p.productId.id,
        count: p.count
    }))
}

router.get('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description');

    if (typeof user !== 'undefined') {
        const user = await req.user
            .populate('cart.items.productId')
            .execPopulate();

        const cartProducts = mapCartItems(user.cart);

        res.render('shop', {
            title: 'Ryc-store магазин',
            isProducts: true,
            products,
            cartProducts
        })
    } else {
        res.render('shop', {
            title: 'Ryc-store магазин',
            isProducts: true,
            products
        })
    }
})

router.get('/products', async(req, res) => {
    const searchField = req.query.search;

    Product.find({ title: { $regex: searchField.toString(), $options: '$i' } })
        .then(data => {
            res.status(200).json(data);
        })
})

router.get('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id);
    const products = await Product.find()
        .select('nowPrice oldPrice size title img');

    res.render('product', {
        title: `Продукт ${product.title}`,
        product,
        products
    })
})

module.exports = router;