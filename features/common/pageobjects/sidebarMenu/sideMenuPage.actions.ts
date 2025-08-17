import { Locator, Page } from '@playwright/test';
import { SideMenuPageLocators } from './sideMenuPage.locators';
import { waitForVisible } from '../../../../src/utils/WaitUtils';

class SideMenuPageActions {
    private page: Page;
    private locators: SideMenuPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new SideMenuPageLocators(page);
    }

    async sideBarMenuButton(): Promise<Locator> {
        await waitForVisible(this.locators.sideBarMenuButtonLocator);
        return this.locators.sideBarMenuButtonLocator;
    }

}
export default SideMenuPageActions;