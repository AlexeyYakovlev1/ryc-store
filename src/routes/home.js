const { Router } = require('express');
const router = Router();

const mapCartItems = cart => {
    return cart.items.map(p => ({
        ...p.productId._doc,
        id: p.productId.id,
        count: p.count
    }))
}

router.get('/', async(req, res) => {
    if (typeof user !== 'undefined') {
        const user = await req.user
            .populate('cart.items.productId')
            .execPopulate();

        const cartProducts = mapCartItems(user.cart);

        res.render('index', {
            title: 'Ryc-store',
            cartProducts
        })
    } else {
        res.render('index', {
            title: 'Ryc-store'
        })
    }
})

module.exports = router;