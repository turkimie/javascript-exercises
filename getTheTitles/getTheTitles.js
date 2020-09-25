const getTheTitles = function(books) {
    titles = books.map(book => book.title);
    return titles;
}

module.exports = getTheTitles;
