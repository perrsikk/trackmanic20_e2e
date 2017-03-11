var commonHelper = require('./../../helpers/common.helper.js');

var TrafficSourceList = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnNewTrafficSource = $('.pull-right>button');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickNewTrafficSource = function () {
        this.btnNewTrafficSource.click();
    };
    
    this.trafficSourceItem = function (trafficSourceName) {
        var trafficSource = element(by.cssContainingText('.table-striped>tbody>tr>td', trafficSourceName));
        return trafficSource;
    };
};

module.exports = TrafficSourceList;
