const { Router } = require('express');
const router = Router();
const Product = require('../models/product');

router.get('/', async(req, res) => {
    const products = await Product.find()
        .select('nowPrice oldPrice sale sizes title img mainSize description sex article');

    res.render('shop', {
        title: 'Ryc-store распродажа',
        isProducts: true,
        products: products.filter(item => item.sale),
        sale: true
    });
});

// const mapCartItems = (cart) => {
//     return cart.items.map(p => ({
//         ...p.productId._doc,
//         id: p.productId.id,
//         count: p.count
//     }))
// }

// router.get('/', async(req, res) => {
//     const products = await Product.find()
//         .select('nowPrice oldPrice sale sizes title img description mainSize');

//     if (typeof user !== 'undefined') {
//         const user = await req.user
//             .populate('cart.items.productId')
//             .execPopulate();

//         const cartProducts = mapCartItems(user.cart);

//         res.render('sale', {
//             title: 'Ryc-store распродажа',
//             isSale: true,
//             products,
//             cartProducts
//         })
//     } else {
//         res.render('sale', {
//             title: 'Ryc-store распродажа',
//             isSale: true,
//             products
//         })
//     }
// })

module.exports = router;