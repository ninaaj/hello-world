const calculateTotal = require('./cart');

test('subtracts discount from subtotal', () => {
    expect(calculateTotal(100, 20)).toBe(80);
});