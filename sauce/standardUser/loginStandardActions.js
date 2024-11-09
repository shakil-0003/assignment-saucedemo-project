const loginStandardLocators = require("./loginStandardLocators");
const LoginStandardLocators = require("./loginStandardLocators");

class LoginStandardActions {
    async enterUserName(userName){
        await loginStandardLocators.loginInputUsername.setValue(userName);
    }
    async enterPassword(password){
        await loginStandardLocators.loginInputPassword.setValue(password);
    }

    async clickOnLoginButton(){
        await loginStandardLocators.loginButton.click();
    }


}

module.exports = new LoginStandardActions();