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
        },

        getTrafficSourceList: function () {
            var trafficSourceList = require('./ts_list/ts_list.po.js');
            return new trafficSourceList();
        },

        getTrafficSourceCreate: function () {
            var trafficSourceCreate = require('./ts_create/ts_create.po.js');
            return new trafficSourceCreate();
        },

        getLinkList: function () {
            var linkList = require('./link_list/link_list.po.js');
            return new linkList();
        },

        getLinkCreate: function () {
            var linkCreate = require('./link_create/link_create.po.js');
            return new linkCreate();
        },

        getConditionList: function () {
            var conditionList = require('./condition_list/condition_list.po.js');
            return new conditionList();
        },

        getConditionCreate: function () {
            var conditionCreate = require('./condition_create/condition_create.po.js');
            return new conditionCreate();
        }
    }
});

module.exports = bottlejs;