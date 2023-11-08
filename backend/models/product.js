const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema(
    {
        category: String,
        name: String,
        description: String,
        price: String,
        stock: Number
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = {Product};