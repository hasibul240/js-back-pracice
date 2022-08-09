// function myfunction(price, totalprice) {
//     console.log('me: ata den to mama. ar ei nene ',price,' tk');
//     console.log(price, '  tkay hobe na mama etar dam', totalprice,'taka');
// }
// var foodprice = 100;
// var mainprice = 250;
// myfunction(foodprice, mainprice);
// function shinggara(many) {
//     var shonggara_price = 10;
//     var quantity = many / shonggara_price;
//     return quantity;
// }
// total = 250;
// var out = shinggara(total);
// console.log('one shinggara price', out);
const shoppingCart = {
    monitor: 15,
    pc: 3,
    keybord: 10,
    mouse: 25,
    shos: 2,

}
const proparty = 'mouse';
const propartyvalue = shoppingCart[proparty];
console.log(propartyvalue);
const acsesoris = Object.keys(shoppingCart);
const price = Object.values(shoppingCart);
console.log(acsesoris);
console.log(price);
const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);

for (var i = 0; i < keys.length; i++){
    const propartyname = keys[i];
    const propartyValue = shoppingCart[propartyname];
    console.log(propartyname, propartyValue);
}
for (propartyname in shoppingCart) {
    const value = shoppingCart[propartyname];
    console.log(propartyname, value);
}