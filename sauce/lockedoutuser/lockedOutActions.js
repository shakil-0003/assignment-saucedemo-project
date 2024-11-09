const lockedOutLocators = require("./lockedOutLocators");
const LockedOutLocators = require("./lockedOutLocators");

class LockedOutActions {
    async enterUserName(userName){
        await lockedOutLocators.loginInputUsername.setValue(userName);
    }
    async enterPassword(password){
        await lockedOutLocators.loginInputPassword.setValue(password);
    }

    async clickOnLoginButton(){
        await lockedOutLocators.loginButton.click();
    }


}

module.exports = new LockedOutActions();