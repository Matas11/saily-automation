import { Locator, Page } from '@playwright/test';
import { UltraPlanPageLocators } from './UltraPlanPage.locators';
import { waitForVisible } from '../../../../src/utils/WaitUtils';

class UltraPlanPageActions {
    private page: Page;
    private locators: UltraPlanPageLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new UltraPlanPageLocators(page);
    }

    async ultraPlanButton(): Promise<Locator> {
        await waitForVisible(this.locators.ultraPlanButtonLocator.first());
        return this.locators.ultraPlanButtonLocator.first();
    }

    async getUltraPlanButton(): Promise<Locator> {
        await waitForVisible(this.locators.getTheUltraPlanButtonLocator.first());
        return this.locators.getTheUltraPlanButtonLocator.first();
    }

    async ultraPlanSideBarButton(): Promise<Locator> {
        await waitForVisible(this.locators.ultraPlanSideBarButton);
        return this.locators.ultraPlanSideBarButton;
    }
}
export default UltraPlanPageActions;