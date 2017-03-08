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
        // var elm = element(by.css('button[type="submit"]'));
        // var EC = protractor.ExpectedConditions;

        this.fillTitle(title);
        this.selectOrganization(organization);
        this.selectAccount(account);
        this.fillUrl(url);
        this.selectRedirectType(redType);
        // browser.wait(EC.elementToBeClickable(elm),5000);
        browser.executeScript('window.scrollTo(0,10000);');
        this.clickCreate;
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
      this.selOrganization.click();
      this.selectOption(organization);
    };

    this.selectAccount = function (account) {
        this.selAccount.click();
        this.selectOption(account);
    };

    this.selectRedirectType = function (redType) {
        this.selRedirectType.click();
        this.selectOption(redType);
    };

    this.clickCreate = function () {
        this.btnCreate.click();
    };

    this.selectOption = function (option) {
        element(by.cssContainingText('.select2-results__options li', option)).click();
    }
};

module.exports = OfferCreate;
