const express = require("express");
const router = express.Router();

const {
    createDelivery,
    getDeliveries
} = require("../Controllers/deliveryController");

router.post("/create", createDelivery);
router.get("/", getDeliveries);

module.exports = router;