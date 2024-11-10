class AddToCartLocators{
    get addProductOne(){
        return $("//button[@id = 'add-to-cart-sauce-labs-backpack']");
    }

    get addProductTwo(){
        return $("//button[@id = 'add-to-cart-sauce-labs-bike-light']")
    }

    get addProductThree(){
        return $("//button[@id = 'add-to-cart-sauce-labs-bolt-t-shirt']")
    }

    get shoppingCartButton(){
            return $("//div[@id = 'shopping_cart_container']");
    }

}

module.exports = new AddToCartLocators();