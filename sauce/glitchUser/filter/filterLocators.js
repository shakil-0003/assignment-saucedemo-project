class FilterLocators {
    

    get filterContainer(){
        return $("//select[@class = 'product_sort_container']");
    }

    get selectFilter(){
        return $("//option[@value='za']");
    }



}

module.exports = new FilterLocators();