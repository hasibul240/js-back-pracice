const phones = [
    { name: 'Samsung', camara: '12mp', storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camara: '12mp', storage: '32gb', price: 26000, color: 'silver' },
    { name: 'iphone', camara: '12mp', storage: '32gb', price: 96000, color: 'silver' },
    { name: 'Xaomi', camara: '12mp', storage: '32gb', price: 45000, color: 'silver' },
    { name: 'Oppo', camara: '12mp', storage: '32gb', price: 20000, color: 'silver' },
    { name: 'Nokia', camara: '12mp', storage: '32gb', price: 30000, color: 'silver' },
    { name: 'HTC', camara: '12mp', storage: '32gb', price: 48000, color: 'silver' },
];
function chepesPhone(phones) {
    let chepest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < chepest.price) {
            chepest = phone;
        }
    }
    return chepest;
}
const mySelection = chepesPhone(phones);
console.log(mySelection);