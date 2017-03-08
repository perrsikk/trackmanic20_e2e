var commonHelper = require('./../../helpers/common.helper.js');


var OfferCreate = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.formTitle       = element(by.cssContainingText('.container-title', 'New offer'));
    this.txtOfferTitle   = element(by.id('title'));
    this.selOrganization = element(by.css('ng-select[formcontrolname="organisation_id"]'));
    this.selAccount      = element(by.css('ng-select[formcontrolname="affiliate_id"]'));
    this.txtOfferUrl     = element(by.id('url'));
    this.selRedirectType = element(by.id('redirectTypeManual'));
    this.btnCreate       = element(by.css('.btn[type="submit"]'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.createOffer = function (title, organization, account, url, redType) {
        this.fillTitle(title);
        this.selectOrganization(organization);
        this.selectAccount(account);
        this.fillUrl(url);
        this.selectRedirectType(redType);
        this.clickCreate();
    };

    this.fillTitle = function (title) {
      this.txtOfferTitle.clear();
      this.txtOfferTitle.sendKeys(title);
    };

    this.fillUrl = function (url) {
        this.txtOfferUrl.clear();
        this.txtOfferUrl.sendKeys(url);
    };

    this.selectOrganization = function (organization) {
        this.selectInDropdown(this.selOrganization, organization);
    };

    this.selectAccount = function (account) {
        this.selectInDropdown(this.selAccount, account);
    };

    this.selectRedirectType = function (redType) {
        this.selectInDropdown(this.selRedirectType, redType);
    };

    this.clickCreate = function () {
        this.btnCreate.click();
    };

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
    }
};

module.exports = OfferCreate;
