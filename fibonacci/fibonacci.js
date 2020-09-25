const fibonacci = function(count) {
    const arr = [0, 1];
    if (count < 0) return "OOPS";
    else {
        for (let i = 1; i < count; i++) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        return arr[arr.length - 1];
    }
}

module.exports = fibonacci
