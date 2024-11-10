const checkoutLocators = require("./glitchCheckoutLocators")

class CheckoutActions{
    async clickOnShoppingCartButton(){
        await checkoutLocators.shoppingCart.click();
    }

    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutButton.click();
    }

    async enterFisrtName(firstName){
        await checkoutLocators.inputFirstName.setValue(firstName);
    }
    async enterLastName(lastName){
        await checkoutLocators.inputLastName.setValue(lastName);
    }

    async enterPostalCode(postalCode){
        await checkoutLocators.inputPostalCode.setValue(postalCode);
    }

    async continueCheckout(){
        await checkoutLocators.continueButton.click();
    }

    async finishCheckout(){
        await checkoutLocators.finishCheckout.click();
    }


    async clickOnBackHome(){
        await checkoutLocators.backHome.click();
    }

}

module.exports = new CheckoutActions();