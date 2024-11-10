const LoginGlitchUserActions = require("../glitchUser/login/glitchUserLoginActions");
const ResetAppStateActions = require("../glitchUser/resetappstate/resetAppStateActions")
const FilterActions = require("../glitchUser/filter/filterActions");
const addToCartActions = require("../glitchUser/addtocart/addToCartActions");
const glitchCheckoutActions = require("../glitchUser/checkout/glitchCheckoutActions");
const LogoutActions = require("../glitchUser/logout/glitchLogoutActions");

const userName = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "MD"
const lastName = "Shakil"
const postalCode = "1236"

describe("suace site login journey", () => {
    it("Should able to successfully login", async () => {
        await LoginGlitchUserActions.enterUserName(userName);
        await browser.pause(2000);
        await LoginGlitchUserActions.enterPassword(password);
        await browser.pause(2000);
        await LoginGlitchUserActions.clickOnLoginButton();
        await browser.pause(5000);
    });

    it("Should able to successfully reset app state", async () => {
        await ResetAppStateActions.clickOnMenuBar();
        await browser.pause(2000);
        await ResetAppStateActions.clickOnReset();
        await browser.pause(2000);
        await ResetAppStateActions.clickCloseMenu();
        await browser.pause(2000);
    });


    it("Should able to successfully filter by name", async () => {
        await FilterActions.selectFilterContainer();
        await browser.pause(2000);
        await FilterActions.selectFilterByName();
        await browser.pause(2000);
    });

    it("Should able to successfully add product to cart", async () => {
        await addToCartActions.selectProduct();
        await browser.pause(2000);
        await addToCartActions.clickOnAddToCart();
        await browser.pause(2000);
    });


    it("Should able to successfully checkout", async () => {
        await glitchCheckoutActions.clickOnShoppingCartButton();
        await browser.pause(2000);
        await glitchCheckoutActions.clickOnCheckoutButton();
        await browser.pause(2000);
        await glitchCheckoutActions.enterFisrtName(firstName);
        await browser.pause(2000);
        await glitchCheckoutActions.enterLastName(lastName);
        await browser.pause(2000);
        await glitchCheckoutActions.enterPostalCode(postalCode);
        await browser.pause(2000);
        await glitchCheckoutActions.continueCheckout();
        await browser.pause(2000);
        await glitchCheckoutActions.finishCheckout();
        await browser.pause(2000);
        await glitchCheckoutActions.clickOnBackHome();
        await browser.pause(2000);
    });


    it("Should able to successfully reset app state", async () => {
        await ResetAppStateActions.clickOnMenuBar();
        await browser.pause(2000);
        await ResetAppStateActions.clickOnReset();
        await browser.pause(2000);
    });


    it("Should able to successfully logout", async () => {
        await LogoutActions.clickOnLogoutButton();
        await browser.pause(2000);

    });



});