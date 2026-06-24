let deliveries = [];

const createDelivery = (req, res) => {
    const { orderId, address, deliveryPartner } = req.body;

    const delivery = {
        deliveryId: deliveries.length + 1,
        orderId,
        address,
        deliveryPartner,
        status: "Preparing for Delivery"
    };

    deliveries.push(delivery);

    res.status(201).json({
        message: "Delivery Created Successfully",
        delivery: delivery
    });
};

const getDeliveries = (req, res) => {
    res.status(200).json(deliveries);
};

module.exports = {
    createDelivery,
    getDeliveries
};