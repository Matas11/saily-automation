import { Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../../src/hooks/browserContextFixture";
import { expect } from "@playwright/test";
import CheckoutPageObjects from "../../pageobjects/checkout/CheckoutPage.actions";


function initializePageObjects(){
  const checkoutPageObjects = new CheckoutPageObjects(pageFixture.page!);
  return { checkoutPageObjects };
}

Then("the user should see an error message on the Checkout page", async function () {
  const checkoutErrorMessage = await initializePageObjects().checkoutPageObjects.checkoutErrorMessage();
  expect (checkoutErrorMessage).toBeVisible()
});

Then("the scenario should fail because the selection is not exists", async function () {
await expect(pageFixture.page.locator('[data-testid="fail_example"]')).toBeVisible();
});


