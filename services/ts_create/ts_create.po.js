var commonHelper = require('./../../helpers/common.helper.js');


var TrafficSourceCreate = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.formTitle             = element(by.cssContainingText('.container-title', 'New traffic source'));
    this.txtTrafficSourceTitle = $('#title');
    this.selOrganization       = $('ng-select[formcontrolname="organisation_id"]');
    this.selAccount            = $('ng-select[formcontrolname="affiliate_id"]');
    this.btnCreate             = $('.btn[type="submit"]');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.createTrafficSource = function (title, organization, account) {
        this.fillTitle(title);
        this.selectOrganization(organization);
        this.selectAccount(account);
        this.clickCreate();
    };

    this.fillTitle = function (title) {
        var trafficSourceName = title+commonHelper.getRandomString(5);
        this.txtTrafficSourceTitle.clear();
        this.txtTrafficSourceTitle.sendKeys(trafficSourceName);
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

module.exports = TrafficSourceCreate;
