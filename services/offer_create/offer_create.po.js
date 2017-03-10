var commonHelper = require('./../../helpers/common.helper.js');


var OfferCreate = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.formTitle       = element(by.cssContainingText('.container-title', 'New offer'));
    this.txtOfferTitle   = $('#title');
    this.selOrganization = $('ng-select[formcontrolname="organisation_id"]');
    this.selAccount      = $('ng-select[formcontrolname="affiliate_id"]');
    this.txtOfferUrl     = $('#url');
    this.selRedirectType = $('#redirectTypeManual');
    this.btnCreate       = $('.btn[type="submit"]');

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
        commonHelper.selectInDropdown(this.selOrganization, organization);
    };

    this.selectAccount = function (account) {
        commonHelper.selectInDropdown(this.selAccount, account);
    };

    this.selectRedirectType = function (redType) {
        commonHelper.selectInDropdown(this.selRedirectType, redType);
    };

    this.clickCreate = function () {
        this.btnCreate.click();
    };
};

module.exports = OfferCreate;
