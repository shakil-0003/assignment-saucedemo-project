const ResetAppLocators = require("./resetAppLocators");

class ResetAppActions{

    async clickOnBurgerMenu(){
        await ResetAppLocators.burgerMenu.click();
    }

    async clickOnResetButton(){
        await ResetAppLocators.resetAppState.click();
    }

    async clickOnCloseMenu(){
        await ResetAppLocators.closeMenu.click();
    }

}

module.exports = new ResetAppActions();
