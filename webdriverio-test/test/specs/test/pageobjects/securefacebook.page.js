const Page = require('./facebook.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('.core') }
}

module.exports = new SecurePage();
