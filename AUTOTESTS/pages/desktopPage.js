const Page = require('./page');

class desktopPage extends Page {

    get priceofFirstElement() {
        return $('div[class="product-grid"] > div:nth-child(1) span[class="price actual-price"]');
    }
}

module.exports = new desktopPage();
