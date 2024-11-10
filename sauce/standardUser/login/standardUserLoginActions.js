const StandardUserLoginLocators = require("./standardUserLoginLocators");

class StandardLoginActions {
    async enterUserName(userName){
        await StandardUserLoginLocators.loginInputUsername.setValue(userName);
    }
    async enterPassword(password){
        await StandardUserLoginLocators.loginInputPassword.setValue(password);
    }

    async clickOnLoginButton(){
        await StandardUserLoginLocators.loginButton.click();
    }

 


}

module.exports = new StandardLoginActions();