const FilterLocators = require("./filterLocators");
class FilterActions {

    async selectFilterContainer(){
        await FilterLocators.filterContainer.click();
    }

    async selectFilterByName(){
        await FilterLocators.selectFilter.click();
    }


}

module.exports = new FilterActions();