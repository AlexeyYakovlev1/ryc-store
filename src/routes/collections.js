const { Router } = require('express');
const Product = require('../models/product');
const router = Router();

router.get('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description sex article');

    res.render('shop', {
        title: 'Ryc-store коллекции',
        isProducts: true,
        products: products.filter(item => item.collections),
        collections: true
    });
});

module.exports = router;