const processPayment = (req, res) => {
    const { orderId, amount, paymentMethod } = req.body;

    const payment = {
        paymentId: Math.floor(Math.random() * 100000),
        orderId,
        amount,
        paymentMethod,
        status: "Payment Successful"
    };

    res.status(200).json({
        message: "Payment Processed Successfully",
        payment: payment
    });
};

module.exports = { processPayment };