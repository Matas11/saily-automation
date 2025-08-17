import { Locator, Page } from '@playwright/test';
import { CheckoutPageLocators } from './CheckoutPage.locators';
import { waitForVisible } from '../../../../src/utils/WaitUtils';

class DestinationPageActions {
    private page: Page;
    private locators: CheckoutPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new CheckoutPageLocators(page);
    }

    async checkoutButton(): Promise<Locator> {
        await waitForVisible(this.locators.checkoutButtonLocator);
        return this.locators.checkoutButtonLocator;
    }

    async checkoutErrorMessage(): Promise<Locator> {
        await waitForVisible(this.locators.checkoutErrorMessageLocator);
        return this.locators.checkoutErrorMessageLocator;
    }

}
export default DestinationPageActions;