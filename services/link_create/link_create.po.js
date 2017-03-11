var commonHelper = require('./../../helpers/common.helper.js');


var LinkCreate = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.formTitle       = element(by.cssContainingText('.container-title', 'New link'));
    this.txtLinkTitle    = $('#title');
    this.selOrganization = $('ng-select[formcontrolname="organisation_id"]');
    this.selAccount      = $('ng-select[formcontrolname="affiliate_id"]');
    this.txtLinkUrl      = $('#url');
    this.btnCreate       = $('.btn[type="submit"]');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.createLink = function (title, organization, account, url) {
        this.fillTitle(title);
        this.selectOrganization(organization);
        this.selectAccount(account);
        this.fillUrl(url);
        this.clickCreate();
    };

    this.fillTitle = function (title) {
        var linkName = title+commonHelper.getRandomString(5);
        this.txtLinkTitle.clear();
        this.txtLinkTitle.sendKeys(linkName);
    };

    this.fillUrl = function (url) {
        this.txtLinkUrl.clear();
        this.txtLinkUrl.sendKeys(url);
    };

    this.selectOrganization = function (organization) {
        commonHelper.selectInDropdown(this.selOrganization, organization);
    };

    this.selectAccount = function (account) {
        commonHelper.selectInDropdown(this.selAccount, account);
    };

    this.clickCreate = function () {
        this.btnCreate.click();
    };
};

module.exports = LinkCreate;
