var pageObject            = require('./../../services/pages').container.PageObject;
var signInPage            = pageObject.getSignInPage();
var mainMenu              = pageObject.getMainMenu();
var offerList             = pageObject.getOfferList();
var signInData            = require('./../../data/sign_in/index');
var newOfferData          = require('./../../data/offer/index');
var offerCreate           = pageObject.getOfferCreate();
var commonHelper          = require('./../../helpers/common.helper.js');

describe('Sign In', function () {

    var email = signInData.existingUser.email;
    var password = signInData.existingUser.password;
    var offerName = newOfferData.newOffer.newOfferName;
    var offerOrg = newOfferData.newOffer.newOfferOrg;
    var offerAcc = newOfferData.newOffer.newOfferAcc;
    var offerUrl = newOfferData.newOffer.newOfferUrl;
    var offerRedirectType = newOfferData.newOffer.newOfferRedirectType;

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

        it('should see offers menu',function () {
            mainMenu.expandSideMenu();

            commonHelper.waitUntilElementPresent(mainMenu.menuElement('Offers'));
            mainMenu.clickMenuItem('Offers');

            commonHelper.waitUntilElementVisible(mainMenu.subMenuElement('Offers'));
        });

        it('should see offer list',function () {
            mainMenu.clickSubMenuItem('Offers');

            commonHelper.waitUntilElementPresent(offerList.btnNewOffer);
        });

        it('should see offer creation form',function () {
            offerList.clickNewOffer();

            commonHelper.waitUntilElementPresent(offerCreate.formTitle);
        });

        it('should see created offer',function () {
            offerCreate.createOffer(offerName, offerOrg, offerAcc, offerUrl, offerRedirectType);

            commonHelper.waitUntilElementPresent(offerList.btnNewOffer);
        });
    });
});