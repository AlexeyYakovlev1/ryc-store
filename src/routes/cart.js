const { Router } = require('express');
const Product = require('../models/product');
const router = Router();
const auth = require('../middleware/auth');

const mapCartItems = (cart) => {
    return cart.items.map(p => ({
        ...p.productId._doc,
        id: p.productId.id,
        count: p.count
    }))
}

const computePrice = (products) => {
    return products.reduce((total, product) => {
        return total += product.nowPrice * product.count
    }, 0)
}

router.post('/add', auth, async(req, res) => {
    try {
        const product = await Product.findById(
            req.body.id, req.body.title, req.body.nowPrice, req.body.mainSize,
            req.body.article, req.body.sex
        );

        await req.user.addToCart(product);
        res.redirect('/cart');
    } catch (e) {
        console.log(e);
    }
})

router.delete('/remove/:id', auth, async(req, res) => {
    await req.user.removeFromCart(req.params.id);
    const user = await req.user.populate('cart.items.productId').execPopulate();
    const cartProducts = mapCartItems(user.cart);

    const cart = {
        cartProducts,
        price: computePrice(cartProducts)
    }

    res.status(200).json(cart);
})

router.get('/', auth, async(req, res) => {
    const user = await req.user
        .populate('cart.items.productId')
        .execPopulate();

    const cartProducts = mapCartItems(user.cart);

    res.render('cart', {
        title: 'Ryc-store корзина',
        isCart: true,
        cartProducts,
        price: computePrice(cartProducts)
    })
})

module.exports = router;