const Product = require("../Models/Product");

let products = [];

const createProduct = (req, res) => {
    const { name, description, price, seller } = req.body;

    const newProduct = new Product(
        products.length + 1,
        name,
        description,
        price,
        seller
    );

    products.push(newProduct);

    res.status(201).json({
        message: "Product Created Successfully",
        product: newProduct
    });
};

const getProducts = (req, res) => {
    res.status(200).json(products);
};

module.exports = {
    createProduct,
    getProducts
};