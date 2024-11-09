const loginStandardActions = require("../standardUser/loginStandardActions");

const userName = "standard_user";
const password = "secret_sauce";

describe("suace site login journey", () => {
    it("Should able to successfully login", async () => {
        await loginStandardActions.enterUserName(userName);
        await browser.pause(2000);
        await loginStandardActions.enterPassword(password);
        await browser.pause(2000);
        await loginStandardActions.clickOnLoginButton();
        await browser.pause(5000);
    });



});