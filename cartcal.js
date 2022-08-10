const shopingcart = [
    { name: 'shoe', price: '1200', quentity:'2' },
    { name: 'shirt', price: '2200', quentity:'4' },
    { name: 'pant', price: '3700', quentity:'6' },
    { name: 'balt', price: '600', quentity:'3' },
];
// Calculate the total cost of the products in a shopping
function totalCost(shopingcart) {
    let total = 0;
    for (let i = 0; i < shopingcart.length; i++) {
        const product = shopingcart[i];
        total = total + (product.price * product.quentity);
    }
    return total;
}
const total = totalCost(shopingcart);
console.log(total);