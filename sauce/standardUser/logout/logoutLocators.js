class LogoutLocators{
    get logoutButton(){
        return $("//a[@id = 'logout_sidebar_link']");
    }

}

module.exports = new LogoutLocators();