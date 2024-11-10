const ResetAppStateLocators = require("./resetAppStateLocators")

class ResetAppStateActions{
    
    async clickOnMenuBar(){
        await ResetAppStateLocators.burgerMenu.click();
    }

    async clickOnReset(){
        await ResetAppStateLocators.resetAppState.click();
    }

    async clickCloseMenu(){
        await ResetAppStateLocators.closeMenu.click();
    }


}

module.exports = new ResetAppStateActions();