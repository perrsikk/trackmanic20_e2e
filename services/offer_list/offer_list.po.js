var commonHelper = require('./../../helpers/common.helper.js');

var OfferList = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnNewOffer = element(by.cssContainingText('button','New offer'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickNewOffer = function () {
      this.btnNewOffer.click();
    };
};

module.exports = OfferList;
