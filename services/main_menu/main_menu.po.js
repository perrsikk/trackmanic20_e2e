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

    this.clickSubMenuItem = function(itemName) {
        this.subMenuElement(itemName).click();
    };

    this.clickMenuItem = function(itemName) {
        this.menuElement(itemName).click();
    };

    this.menuElement = function(itemName) {
        return element(by.cssContainingText('span', itemName))
    };

    this.subMenuElement = function(itemName) {
        return element(by.cssContainingText('[routerlinkactive="active"]', itemName))
    };

    this.itemName = function(menu_element) {
        var items = element.all($('[routerlinkactive="active"]')).filter(function(item) {
            return item.element($('.item')).getText().then(function(_element) {
                return _element === menu_element;
            });
        });
        return items.first();
    };
};

module.exports = MainMenu;
