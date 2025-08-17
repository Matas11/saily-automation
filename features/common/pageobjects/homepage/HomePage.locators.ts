import { Locator, Page } from '@playwright/test';

export class HomePageLocators {
    constructor(private readonly page: Page) {}

    get cookiesAcceptButtonLocator(): Locator {
        return this.page.locator('[data-testid="consent-widget-accept-all"]')
    }
}