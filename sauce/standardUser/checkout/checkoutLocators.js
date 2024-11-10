class CheckoutLocators{

    get checkoutButton(){
        return $("//button[@id = 'checkout']");
    }

    get inputFirstName(){
        return $("//input[@id = 'first-name']");
    }

    get inputLastName(){
        return $("//input[@id = 'last-name']");
    }

    get inputPostalCode(){
        return $("//input [@id = 'postal-code']");
    }

    get continueButton(){
        return $("//input [@id = 'continue']");
    }

    get finishCheckout(){
        return $("//button [@id = 'finish']");
    }

    get backHome(){
        return $("//button[@id = 'back-to-products']");
    }

}

module.exports = new CheckoutLocators();