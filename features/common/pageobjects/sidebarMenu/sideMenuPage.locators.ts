import { Locator, Page } from '@playwright/test';

export class SideMenuPageLocators {
    constructor(private readonly page: Page) {}

    get sideBarMenuButtonLocator(): Locator {
        return this.page.locator('[id="mobile-sidebar-open"]')
    }
}