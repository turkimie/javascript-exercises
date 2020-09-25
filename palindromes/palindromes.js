const palindromes = function(str) {
    let reverse = Array.from(str).reverse().join("");
    return reverse === str;
}

module.exports = palindromes
