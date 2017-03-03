var bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getSignInPage: function () {
            var signInPage = require('./sign_in/sign_in.po.js');
            return new signInPage();
        },

        getMainMenu: function () {
            var mainMenu = require('./main_menu/main_menu.po.js');
            return new mainMenu();
        },

        getOfferList: function () {
            var offerList = require('./offer_list/offer_list.po.js');
            return new offerList();
        },

        getOfferCreate: function () {
            var offerCreate = require('./offer_create/offer_create.po.js');
            return new offerCreate();
        }
    }
});

module.exports = bottlejs;