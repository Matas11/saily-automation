import { Locator, Page } from '@playwright/test';

export class DestinationPageLocators {
    constructor(private readonly page: Page) {}

    get viewDestinationsLocator(): Locator {
        return this.page.locator('[data-testid="nav-cta-container-desktop"]')
    }

    get viewDestinationsSideBarMenuButtonLocator(): Locator {
        return this.page.locator('[data-testid="nav-item-container-mobile"] [data-ga-slug="View Destinations"]')
    }
}