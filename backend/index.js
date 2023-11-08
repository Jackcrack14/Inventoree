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

app.get('/products', (req, res) => {
    console.log("database connected")
})

app.post('/products', (req, res) =>{
    const {category, name, description, price, stock} = req.body;

    const products = new Product({category: category, name: name, description: description, price: price, stock: stock});

    products.save()
    res.send(products)
})


app.listen(3000, console.log("DB conncected and server running"))