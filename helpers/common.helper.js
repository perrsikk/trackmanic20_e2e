var faker = require('faker');

/**
 * Common helper object.
 * @constructor
 */
var CommonHelper = function() {

    /**
     * Clear browser session storage
     *
     */
    this.clearSessionStorage = function () {
        browser.executeScript('window.sessionStorage.clear();');
    };

    /**
     * Clear browser local storage
     *
     */
    this.clearLocalStorage = function () {
        browser.executeScript('window.localStorage.clear();');
    };

    /**
     * Clear cookies
     *
     */
    this.clearCookies = function () {
        browser.manage().deleteAllCookies();
    };

    /**
     * Clear all browser data
     *
     */
    this.clearAllData = function () {
        this.clearSessionStorage();
        this.clearLocalStorage();
        this.clearCookies();
    };

    /**
     * Wait until selected element will be present in DOM
     *
     * @param element
     */
    this.waitUntilElementPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.presenceOf(element));
    };

    /**
     * Wait until selected element will be visible
     *
     * @param element
     */
    this.waitUntilElementVisible = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.visibilityOf(element));
    };

    /**
     * Unique value email
     *
     */
    this.uniqueEmail = function () {
        return faker.internet.email();
    };
};

module.exports = new CommonHelper();