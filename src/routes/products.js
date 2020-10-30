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
    }));
}

router.get('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description sex article accessories');

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
        });
    } else {
        res.render('shop', {
            title: 'Ryc-store магазин',
            isProducts: true,
            products
        });
    }
});

router.get('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id);
    const products = await Product.find()
        .select('nowPrice oldPrice sizes title img');

    res.render('product', {
        title: `Продукт ${product.title}`,
        product,
        products
    });
});

router.post('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description sex article accessories');

    res.render('shop', {
        title: 'Ryc-store магазин',
        isProducts: true,
        products: products.filter(item => item.title.toLowerCase().search(req.body.search.trim().toLowerCase()) !== -1),
        textSearch: req.body.search
    });
});

module.exports = router;