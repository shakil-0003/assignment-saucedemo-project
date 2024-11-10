const LoginGlitchUserLocators = require("./glitchUserLoginLocators");

class LoginGlitchUserActions {
    async enterUserName(userName){
        await LoginGlitchUserLocators.loginInputUsername.setValue(userName);
    }
    async enterPassword(password){
        await LoginGlitchUserLocators.loginInputPassword.setValue(password);
    }

    async clickOnLoginButton(){
        await LoginGlitchUserLocators.loginButton.click();
    }


}

module.exports = new LoginGlitchUserActions();