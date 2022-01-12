const desktopPage = require('../../pages/desktopPage.js');
require("expect-webdriverio").setOptions({ wait: 2000, interval: 500 });
require('../../node_modules/webdriverio')

// describe('My Login application', () => {
//     it('should open desctop page', async () => {
//         await desctopPage.open('desctops');

//         await desctopPage.firstElement.clik();
//         let text = await desctopePage.price.getText();
//         await expect(text).toBe('800,00');
//         });
// });


describe('open main page and select desctop computers', () => {
    it('should open main page', async () => {
        await desktopPage.open();
    })
})