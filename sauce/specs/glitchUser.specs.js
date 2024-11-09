const LoginGlitchUserActions = require("../glitchUser/login/glitchUserLoginActions");
const FilterActions = require("../glitchUser/filter/filterActions");
const addToCartActions = require("../glitchUser/addtocart/addToCartActions");
const glitchCheckoutActions = require("../glitchUser/checkout/glitchCheckoutActions");

const userName = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "First Name"
const lastName = "Last Name"
const postalCode = "Postal Code"

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
        await LoginGlitchUserActions.clickOnMenuBar();
        await browser.pause(2000);
        await LoginGlitchUserActions.clickOnReset();
        await browser.pause(2000);
        await LoginGlitchUserActions.clickCloseMenu();
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
    });



});