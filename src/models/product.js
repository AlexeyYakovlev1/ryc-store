const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    img: [{
        type: String,
        required: true
    }],
    article: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    nowPrice: {
        type: Number,
        required: true
    },
    sale: {
        type: Number,
        required: true
    },
    mainSize: {
        type: String,
        required: true
    },
    sizes: [{
        type: String,
        required: true
    }]
})

productSchema.method('toClient', function() {
    const product = this.toObject();

    product.id = product._id;
    delete product._id;

    return product;
})

module.exports = model('Product', productSchema);