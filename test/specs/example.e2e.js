const desctopePage = require('../../pageobjects/desktopPage.js');
require("expect-webdriverio").setOptions({ wait: 2000, interval: 500 });
require('../../node_modules/webdriverio')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


