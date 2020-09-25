const reverseString = function(string) {
    let array = [];
    for (let i = string.length - 1; i >= 0; i--) {
        array.push(string.charAt(i));
    }
    array = array.join("").toString();
    return array;
}

module.exports = reverseString
