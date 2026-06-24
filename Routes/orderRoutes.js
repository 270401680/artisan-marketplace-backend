const express = require("express");
const router = express.Router();

const {
    createOrder,
    getOrders,
    updateOrderStatus
} = require("../Controllers/orderController");

router.post("/create", createOrder);
router.get("/", getOrders);
router.put("/:id/status", updateOrderStatus);

module.exports = router;