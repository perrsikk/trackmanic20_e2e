var commonHelper = require('./../../helpers/common.helper.js');

var SignInPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.txtEmail    = $('input[name="email"]');

    this.btnLogin    = $('button[type="submit"]');

    this.txtPassword = $('input[name="password"]');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------


    this.clickLogin = function() {
        this.btnLogin.click();
    };

    this.fillEmailField = function(email) {
        this.txtEmail.clear();
        this.txtEmail.sendKeys(email);
    };

    this.fillPasswordField = function(password) {
        this.txtPassword.clear();
        this.txtPassword.sendKeys(password);
    };

    this.login = function(email, password) {
        this.fillEmailField(email);
        this.fillPasswordField(password);
        this.clickLogin();
    };
};

module.exports = SignInPage;
