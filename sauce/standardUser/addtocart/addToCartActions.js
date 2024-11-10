const AddToCartLocators = require("./addToCartLocators");

class AddToCartActions{
    async addFirstProduct(){
        await AddToCartLocators.addProductOne.click();
    }

    async addSecondProduct(){
        await AddToCartLocators.addProductTwo.click();
    }

    async addThirdProduct(){
        await AddToCartLocators.addProductThree.click();
    }

    async clickOnShoppingCartButton(){
        await AddToCartLocators.shoppingCartButton.click();
    }

}

module.exports = new AddToCartActions();