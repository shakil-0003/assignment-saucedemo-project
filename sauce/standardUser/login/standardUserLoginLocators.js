class StandardUserLoginLocators {
    get loginInputUsername(){
        return $("//input[@name='user-name']");
    }

    get loginInputPassword(){
        return $("//input[@name='password']");
    }

    get loginButton(){
        return $("//input[@name='login-button']");
    }

}

module.exports = new StandardUserLoginLocators();