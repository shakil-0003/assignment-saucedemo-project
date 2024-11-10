class ResetAppLocators{
    
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

module.exports = new ResetAppLocators();