import { Locator, Page } from '@playwright/test';
import { DestinationPageLocators } from './DestinationPage.locators';
import { waitForVisible } from '../../../../src/utils/WaitUtils';

class DestinationPageActions {
    private page: Page;
    private locators: DestinationPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new DestinationPageLocators(page);
    }

    async selectCountry(selector: string): Promise<Locator> {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        return element;
    }

    async viewDestinationsButton(): Promise<Locator> {
        await waitForVisible(this.locators.viewDestinationsLocator);
        return this.locators.viewDestinationsLocator;
    }

    async viewDestinationsSideBarMenuButton(): Promise<Locator> {
        await waitForVisible(this.locators.viewDestinationsSideBarMenuButtonLocator);
        return this.locators.viewDestinationsSideBarMenuButtonLocator;
    }

}
export default DestinationPageActions;