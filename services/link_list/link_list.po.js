var commonHelper = require('./../../helpers/common.helper.js');

var LinkList = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnNewLink = element(by.buttonText('New link'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickNewLink = function () {
        this.btnNewLink.click();
    };
    
    this.linkItem = function (linkName) {
        return element(by.cssContainingText('.table-striped>tbody>tr>td', linkName));
    };
};

module.exports = LinkList;
