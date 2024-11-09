const addToCartLocators = require("./addToCartLocators")

class AddToCartActions{
    async selectProduct(){
        await addToCartLocators.productName.click();
    }

    async clickOnAddToCart(){
        await addToCartLocators.addToCartButton.click();
    }

}

module.exports = new AddToCartActions();