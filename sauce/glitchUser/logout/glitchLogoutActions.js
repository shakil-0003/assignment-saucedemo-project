const glitchLogoutLocators = require("./glitchLogoutLocators");
const logoutLocators = require("./glitchLogoutLocators")
class LogoutActions{
    async clickOnLogoutButton(){
        await glitchLogoutLocators.logoutButton.click();
    }


}

module.exports = new LogoutActions();