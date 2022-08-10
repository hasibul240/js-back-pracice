const shopingcart = [
    { name: 'shoe', price: '1200' },
    { name: 'shirt', price: '2200' },
    { name: 'pant', price: '3700' },
    { name: 'balt', price: '600' },
];
// Calculate the total cost of the products in a shopping cart
function totalCost(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
    }
    return total;
}
const total = totalCost(shopingcart);
console.log(total);