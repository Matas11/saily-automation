import { Locator } from '@playwright/test';

export async function waitForVisible(locator: Locator, timeout = 5000): Promise<void> {
  try {
    await locator.waitFor({ state: 'visible', timeout });
  } catch (error) {
    throw new Error(`Element ${locator} was not visible within ${timeout} ms`);
  }
}