const repeatString = function(string, times) {
    let result= "";
    if (times >= 0) {
        for (i = 0; i < times; i++) {
            result += string;
        }
        return result;
    }
    else {
        return "ERROR"
    }
}

module.exports = repeatString
