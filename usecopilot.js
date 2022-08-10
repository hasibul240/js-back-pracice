const arr = [11, 25, 12, 36, 48, 98, 65, 32];
//find the lowest number in an array
function findLowest(arr) {
    var lowest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
}
const lowest = findLowest(arr);