var commonHelper = require('./../../helpers/common.helper.js');

var OfferList = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnNewOffer = element(by.buttonText('New offer'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickNewOffer = function () {
        this.btnNewOffer.click();
    };
    
    this.offerItem = function (offerName) {
        var offer = element(by.cssContainingText('.table-striped>tbody>tr>td', offerName));
        return offer;
    };
};

module.exports = OfferList;
