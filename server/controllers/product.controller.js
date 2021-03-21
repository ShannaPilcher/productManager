const Product = require('../models/product.models');
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "Something went wrong with Product.find", error: err}))
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
    .then(Product => res.json(Product))
    .catch(err => res.json({message: "Something went wrong with Product.create", error: err}))
}