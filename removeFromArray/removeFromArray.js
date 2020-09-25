const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let index = arr.indexOf(arguments[i]);
        if (index === -1) {
            continue;
        }
        arr.splice(index, 1);
    }
    return arr;
}

module.exports = removeFromArray
