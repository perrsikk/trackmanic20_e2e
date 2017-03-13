var commonHelper = require('./../../helpers/common.helper.js');

var ConditionList = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.btnNewCondition = element(by.buttonText('New condition'));

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    this.clickNewCondition = function () {
        this.btnNewCondition.click();
    };
    
    this.conditionItem = function (conditionName) {
        return element(by.cssContainingText('.table-striped>tbody>tr>td', conditionName));
    };
};

module.exports = ConditionList;
