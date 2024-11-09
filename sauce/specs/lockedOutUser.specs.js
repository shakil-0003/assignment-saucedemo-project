const lockedOutActions = require("../lockedoutuser/lockedOutActions");

const userName = "locked_out_user";
const password = "secret_sauce";

describe("suace site login journey", () => {
    it("Should able to successfully login", async () => {
        await lockedOutActions.enterUserName(userName);
        await browser.pause(2000);
        await lockedOutActions.enterPassword(password);
        await browser.pause(2000);
        await lockedOutActions.clickOnLoginButton();
        await browser.pause(2000);
    });



});