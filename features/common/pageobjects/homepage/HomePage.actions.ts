import { Locator, Page } from '@playwright/test';
import { HomePageLocators } from './HomePage.locators';
import { waitForVisible } from '../../../../src/utils/WaitUtils';

class HomePageActions {
    private page: Page;
    private locators: HomePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomePageLocators(page);
    }

    async cookiesAcceptButton(): Promise<Locator> {
        await waitForVisible(this.locators.cookiesAcceptButtonLocator);
        return this.locators.cookiesAcceptButtonLocator;
    }

}
export default HomePageActions;