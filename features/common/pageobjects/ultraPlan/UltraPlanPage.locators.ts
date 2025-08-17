import { Locator, Page } from '@playwright/test';

export class UltraPlanPageLocators {
    constructor(private readonly page: Page) {}

    get ultraPlanButtonLocator(): Locator {
        return this.page.locator('a[href="/esim-ultra-plan/"]')
    }

    get getTheUltraPlanButtonLocator(): Locator {
        return this.page.locator('[data-testid="go-to-checkout-hero-cta"]')
    }

    get ultraPlanSideBarButton(): Locator {
        return this.page.locator('[id="sidebar-nav"] [href="/esim-ultra-plan/"]')
    }

}