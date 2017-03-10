var pageObject            = require('./../../services/pages').container.PageObject;
var signInPage            = pageObject.getSignInPage();
var mainMenu              = pageObject.getMainMenu();
var signInData            = require('./../../data/sign_in/index');
var commonHelper          = require('./../../helpers/common.helper.js');

describe('Sign In', function () {

    var email = signInData.existingUser.email;
    var password = signInData.existingUser.password;

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
    });
});