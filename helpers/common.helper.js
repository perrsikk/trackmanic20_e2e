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

    /**
     * Interact with drop-downs
     *
     */
    this.selectInDropdown = function (selector, option) {
        this.dropDown(selector).click();
        this.selectOption(option);
    };

    this.dropDown = function (selector) {
        var element = selector;
        return element;
    };

    this.selectOption = function (option) {
        element(by.cssContainingText('.select2-results__options li', option)).click();
    };

    /**
     * Usage: Generate random string.
     * characterLength :  Length of string.
     * Returns : Random string.
     */
    this.getRandomString = function (characterLength) {
        var randomText = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };
};

module.exports = new CommonHelper();