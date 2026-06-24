const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProducts
} = require("../Controllers/productController");

router.post("/create", createProduct);

router.get("/", getProducts);

module.exports = router;