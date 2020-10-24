const { Router } = require('express');
const router = Router();
const Product = require('../models/product');

router.get('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description sex article');

    res.render('shop', {
        title: 'Ryc-store аксессуары',
        isProducts: true,
        products: products.filter(item => item.accessories),
        accessories: true
    });
});

module.exports = router;