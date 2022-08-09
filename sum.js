const myNimbers = [54, 49, 22, 35, 69, 75, 15, 42, 92];
function getSumOfAnArry(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
getSumOfAnArry(myNimbers);


function fundOddNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const oddNumbers = fundOddNumbers(myNimbers);
console.log(oddNumbers);


function multyplication(numbers) {
    let result = 1;
    for (let i = 1; i <= numbers; i++){
        result = result * i;
    }
    return result;
}
const result = multyplication(9);
console.log(result);