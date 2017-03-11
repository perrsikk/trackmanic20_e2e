var commonHelper = require('./../../helpers/common.helper.js');

var MainMenu = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnLogout = $('.user-exit');
    this.btnExpandMenu = $('.j-aside-swipe');
    this.btnOfferMenu = element(by.cssContainingText('span', 'Offers'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.expandSideMenu = function () {
      this.btnExpandMenu.click();
    };

    this.clickSubMenuItem = function(name) {
        this.subMenuElement(name).click();
    };

    this.clickMenuItem = function(name) {
        this.menuElement(name).click();
    };

    this.expandingMenuItem = function(name) {
        this.expandingMenuElement(name).click();
    };

    this.expandingMenuElement = function(name) {
        return element(by.cssContainingText('span', name))
    };

    this.menuElement = function(name) {
        return element(by.cssContainingText('button>span', name))
    };

    this.subMenuElement = function(name) {
        return element(by.cssContainingText('[routerlinkactive="active"]', name))
    };

    this.itemName = function(menu_element) {
        var items = element.all($('[routerlinkactive="active"]')).filter(function(item) {
            return item.element($('[routerlinkactive="active"]')).getText().then(function(_element) {
                return _element === menu_element;
            });
        });
        return items.first();
    };
};

module.exports = MainMenu;
