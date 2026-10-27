function calculateTotal(subtotal, discount) {
    if (discount > subtotal) return 0;
    return subtotal - discount;
}
module.exports = calculateTotal;