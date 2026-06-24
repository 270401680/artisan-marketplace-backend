class Order {
    constructor(id, user, product, quantity) {
        this.id = id;
        this.user = user;
        this.product = product;
        this.quantity = quantity;
        this.status = "Pending";
    }
}

module.exports = Order;