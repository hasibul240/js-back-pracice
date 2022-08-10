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