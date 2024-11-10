const CheckoutLocators = require("./checkoutLocators")

class CheckoutActions{
    async clickOnCheckoutButton(){
        await CheckoutLocators.checkoutButton.click();
    }

    async enterFisrtName(firstName){
        await CheckoutLocators.inputFirstName.setValue(firstName);
    }
    async enterLastName(lastName){
        await CheckoutLocators.inputLastName.setValue(lastName);
    }

    async enterPostalCode(postalCode){
        await CheckoutLocators.inputPostalCode.setValue(postalCode);
    }

    async continueCheckout(){
        await CheckoutLocators.continueButton.click();
    }

    async finishCheckout(){
        await CheckoutLocators.finishCheckout.click();
    }


    async clickOnBackHome(){
        await CheckoutLocators.backHome.click();
    }

}

module.exports = new CheckoutActions();