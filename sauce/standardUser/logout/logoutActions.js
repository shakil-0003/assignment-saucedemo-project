const LogoutLocators = require("./logoutLocators")
class LogoutActions{
    async clickOnLogoutButton(){
        await LogoutLocators.logoutButton.click();
    }


}

module.exports = new LogoutActions();