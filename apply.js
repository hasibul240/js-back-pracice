const price = 2500;
const quantity = 503;
function chackEven(inche) {
    const remaning = inche % 2;
    if (remaning === 0) {
        return true;
    } else {
        return false;
    }
}
const numberIsEven = chackEven(price);
console.log(numberIsEven);
const numberIsOdd = chackEven(quantity);
console.log(numberIsOdd);
