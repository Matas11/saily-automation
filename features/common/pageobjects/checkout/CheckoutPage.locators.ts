import { Locator, Page } from '@playwright/test';

export class CheckoutPageLocators {
    constructor(private readonly page: Page) {}

    get checkoutButtonLocator(): Locator {
        return this.page.locator('[data-testid="go-to-checkout-cta"]')
    }

    get checkoutErrorMessageLocator(): Locator {
        return this.page.locator('[data-testid="error-message-request"]')
    }
}