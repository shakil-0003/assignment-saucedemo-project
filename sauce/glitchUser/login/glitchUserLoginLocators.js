class LoginGlitchUserLocators {
    get loginInputUsername(){
        return $("//input[@name='user-name']");
    }

    get loginInputPassword(){
        return $("//input[@name='password']");
    }

    get loginButton(){
        return $("//input[@name='login-button']");
    }

    get burgerMenu(){
        return $("//button[@id= 'react-burger-menu-btn']");
    }

    get resetAppState(){
        return $("//a[@id = 'reset_sidebar_link']");
    }

    get closeMenu(){
        return $("//button[@id = 'react-burger-cross-btn']");
    }



}

module.exports = new LoginGlitchUserLocators();