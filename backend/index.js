const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Product = require('./models/product')
const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Success")
})

app.get('/products', async (req, res) => {
    const products = await Product.find()
    res.send(products)
    
    
})

app.post('/new_products', async (req, res) => {
    const {category, name, description, price, stock} = req.body;

    const products = await Product.create({category: category, name: name, description: description, price: price, stock: stock});

    // products.save()
    res.send(products)
})

app.get('/products/:id', async(req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);

    res.send(product);
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const {category, name, description, price, stock} = req.body;

    const product = await Product.findByIdAndUpdate(id, {
        category: category,
        name: name,
        description: description,
        price: price,
        stock: stock
    })

    res.send(product)
})

app.delete('/products/:id', async (req,res) => {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    res.send("Product deleted!")
})

app.listen(3000, console.log("DB conncected and server running"))