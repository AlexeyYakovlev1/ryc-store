const { Schema, model } = require('mongoose');

const user = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            title: {
                type: String,
                required: true
            },
            count: {
                type: Number,
                required: true,
                default: 1
            },
            price: {
                type: Number,
                required: true
            },
            mainSize: {
                type: String,
                required: true
            },
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }]
    }
})

// метод для добавления в корзину
user.methods.addToCart = function(product) {
    const items = [...this.cart.items];
    const idx = items.findIndex(p => {
        return p.productId.toString() === product._id.toString()
    })

    if (idx >= 0) {
        items[idx].count = items[idx].count + 1;
    } else {
        items.push({
            title: product.title,
            price: product.nowPrice,
            mainSize: product.mainSize,
            sex: product.sex,
            article: product.article,
            productId: product._id,
            count: 1
        })
    }

    this.cart = { items };
    return this.save();
}

// метод для удaления из корзины
user.methods.removeFromCart = function(id) {
    let items = [...this.cart.items];
    const idx = items.findIndex(product => product.productId.toString() === id.toString());

    if (items[idx].count === 1) {
        items = items.filter(product => product.productId.toString() !== id.toString());
    } else {
        items[idx].count--;
    }

    this.cart = { items };
    return this.save();
}

// метод для очищения корзины
user.methods.clearCart = function() {
    this.cart = { items: [] };
    return this.save();
}

module.exports = model('User', user);