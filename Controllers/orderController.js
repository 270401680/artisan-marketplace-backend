const Order = require("../Models/Order");

let orders = [];

const createOrder = (req, res) => {
    const { user, product, quantity } = req.body;

    const newOrder = new Order(
        orders.length + 1,
        user,
        product,
        quantity
    );

    orders.push(newOrder);

    res.status(201).json({
        message: "Order Created Successfully",
        order: newOrder
    });
};

const getOrders = (req, res) => {
    res.status(200).json(orders);
};

const updateOrderStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const order = orders.find(order => order.id === Number(id));

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    order.status = status;

    res.status(200).json({
        message: "Order Status Updated Successfully",
        order: order
    });
};

module.exports = {
    createOrder,
    getOrders,
    updateOrderStatus
};