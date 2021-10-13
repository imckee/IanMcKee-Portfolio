const Page = require('./imdb.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('.a-list-item') }
}

module.exports = new SecurePage();
