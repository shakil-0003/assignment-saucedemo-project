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

    async clickOnMenuBar(){
        await LoginGlitchUserLocators.burgerMenu.click();
    }

    async clickOnReset(){
        await LoginGlitchUserLocators.resetAppState.click();
    }

    async clickCloseMenu(){
        await LoginGlitchUserLocators.closeMenu.click();
    }


}

module.exports = new LoginGlitchUserActions();