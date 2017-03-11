var pageObject            = require('./../../services/pages').container.PageObject;
var signInPage            = pageObject.getSignInPage();
var mainMenu              = pageObject.getMainMenu();
var trafficSourceList     = pageObject.getTrafficSourceList();
var signInData            = require('./../../data/sign_in/index');
var newTrafficSourceData  = require('./../../data/ts/index');
var trafficSourceCreate   = pageObject.getTrafficSourceCreate();
var commonHelper          = require('./../../helpers/common.helper.js');

describe('Traffic Source Create', function () {

    var email = signInData.existingUser.email;
    var password = signInData.existingUser.password;
    var trafficSourceName = newTrafficSourceData.newTrafficSource.newTrafficSourceName;
    var trafficSourceOrg = newTrafficSourceData.newTrafficSource.newTrafficSourceOrg;
    var trafficSourceAcc = newTrafficSourceData.newTrafficSource.newTrafficSourceAcc;

    describe('checking for login as existing user', function () {

        beforeAll(function () {
            browser.get(signInData.link);
        });

        afterAll(function () {
            commonHelper.clearAllData();
        });

        it('should open login page', function () {
            commonHelper.waitUntilElementPresent(signInPage.btnLogin);
        });

        it('should see logout button after login',function () {
            commonHelper.waitUntilElementVisible(signInPage.txtEmail);

            signInPage.login(email,password);
            commonHelper.waitUntilElementPresent(mainMenu.btnLogout);
        });

        it('should see Traffic Sources menu',function () {
            mainMenu.expandSideMenu();

            commonHelper.waitUntilElementPresent(mainMenu.menuElement('Traffic Sources'));
        });

        it('should see Traffic source list',function () {
            mainMenu.clickMenuItem('Traffic Sources');

            commonHelper.waitUntilElementPresent(trafficSourceList.btnNewTrafficSource);
        });

        it('should see Traffic source creation form',function () {
            trafficSourceList.clickNewTrafficSource();

            commonHelper.waitUntilElementPresent(trafficSourceCreate.formTitle);
        });

        it('should see created traffic source',function () {
            trafficSourceCreate.createTrafficSource(trafficSourceName, trafficSourceOrg, trafficSourceAcc);

            commonHelper.waitUntilElementPresent(trafficSourceList.btnNewTrafficSource);
            commonHelper.waitUntilElementPresent(trafficSourceList.trafficSourceItem(trafficSourceName));
        });
    });
});