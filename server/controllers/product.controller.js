const Product = require('../models/product.models');
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json({message: "Something went wrong with Product.find", error: err}))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
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