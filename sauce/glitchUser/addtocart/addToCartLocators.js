class AddToCartLocators{
    get productName(){
        return $("(//div[contains(@class, 'inventory_item_name' )])[1]");
    }

    get addToCartButton(){
        return $("//button[@id = 'add-to-cart']");
    }

}

module.exports = new AddToCartLocators