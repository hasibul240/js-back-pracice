function MaxNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [165, 124, 35, 124, 369, 124, 54, 62, 194,];
const tallast = MaxNumber(heights);
console.log('the tallasts parson is', tallast);
// find smalest number in array 

const min = Math.min(...heights)
console.log('the smalest number is ', min);