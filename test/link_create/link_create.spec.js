var pageObject            = require('./../../services/pages').container.PageObject;
var signInPage            = pageObject.getSignInPage();
var mainMenu              = pageObject.getMainMenu();
var linkList              = pageObject.getLinkList();
var signInData            = require('./../../data/sign_in/index');
var newLinkData           = require('./../../data/link/index');
var linkCreate            = pageObject.getLinkCreate();
var commonHelper          = require('./../../helpers/common.helper.js');

describe('Link Create', function () {

    var email = signInData.existingUser.email;
    var password = signInData.existingUser.password;
    var linkName = newLinkData.newLink.newLinkName;
    var linkOrg = newLinkData.newLink.newLinkOrg;
    var linkAcc = newLinkData.newLink.newLinkAcc;
    var linkUrl = newLinkData.newLink.newLinkUrl;

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

        it('should see link menu',function () {
            mainMenu.expandSideMenu();

            commonHelper.waitUntilElementPresent(mainMenu.expandingMenuElement('Offers'));
            mainMenu.expandingMenuItem('Offers');

            commonHelper.waitUntilElementVisible(mainMenu.subMenuElement('Links'));
        });

        it('should see link list',function () {
            mainMenu.clickSubMenuItem('Links');

            commonHelper.waitUntilElementPresent(linkList.btnNewLink);
        });

        it('should see link creation form',function () {
            linkList.clickNewLink();

            commonHelper.waitUntilElementPresent(linkCreate.formTitle);
        });

        it('should see created link',function () {
            linkCreate.createLink(linkName, linkOrg, linkAcc, linkUrl);

            commonHelper.waitUntilElementPresent(linkList.btnNewLink);
            commonHelper.waitUntilElementPresent(linkList.linkItem(linkName));
        });
    });
});