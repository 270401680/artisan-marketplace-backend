const getDashboard = (req, res) => {

    const dashboard = {
        totalUsers: 1,
        totalProducts: 1,
        totalOrders: 1,
        totalRevenue: 90,
        activeDeliveries: 1
    };

    res.status(200).json(dashboard);
};

module.exports = {
    getDashboard
};