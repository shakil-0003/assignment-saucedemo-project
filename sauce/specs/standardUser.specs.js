const StandardLoginActions = require("../standardUser/login/standardUserLoginActions");
const ResetAppActions = require("../standardUser/resetapp/resetAppActions");
const AddToCartActions = require("../standardUser/addtocart/addToCartActions");
const CheckoutActions = require("../standardUser/checkout/checkoutActions")
const LogoutActions = require("../standardUser/logout/logoutActions")

const userName = "standard_user";
const password = "secret_sauce";
const firstName = "MD"
const lastName = "Shakil"
const postalCode = "1204"

describe("suace site login journey", () => {
    it("Should able to successfully login", async () => {
        await StandardLoginActions.enterUserName(userName);
        await browser.pause(2000);
        await StandardLoginActions.enterPassword(password);
        await browser.pause(2000);
        await StandardLoginActions.clickOnLoginButton();
        await browser.pause(3000);
    });

    it("Should able to successfully reset app state", async () => {
        await ResetAppActions.clickOnBurgerMenu();
        await browser.pause(2000);
        await ResetAppActions.clickOnResetButton();
        await browser.pause(2000);
        await ResetAppActions.clickOnCloseMenu();
        await browser.pause(3000);
    });


    it("Should able to successfully add product to cart", async () => {
        await AddToCartActions.addFirstProduct();
        await browser.pause(2000);
        await AddToCartActions.addSecondProduct();
        await browser.pause(2000);
        await AddToCartActions.addThirdProduct();
        await browser.pause(2000);
        await AddToCartActions.clickOnShoppingCartButton();
        await browser.pause(3000);
    });



    it("Should able to successfully checkout", async () => {
        await CheckoutActions.clickOnCheckoutButton();
        await browser.pause(2000);
        await CheckoutActions.enterFisrtName(firstName);
        await browser.pause(2000);
        await CheckoutActions.enterLastName(lastName);
        await browser.pause(2000);
        await CheckoutActions.enterPostalCode(postalCode);
        await browser.pause(2000);
        await CheckoutActions.continueCheckout();
        await browser.pause(2000);
        await CheckoutActions.finishCheckout();
        await browser.pause(2000);
        await CheckoutActions.clickOnBackHome();
        await browser.pause(2000);
    });

    it("Should able to successfully reset app state", async () => {
        await ResetAppActions.clickOnBurgerMenu();
        await browser.pause(2000);
        await ResetAppActions.clickOnResetButton();
        await browser.pause(2000);

    });


    it("Should able to successfully logout", async () => {
        await LogoutActions.clickOnLogoutButton();
        await browser.pause(2000);

    });



});