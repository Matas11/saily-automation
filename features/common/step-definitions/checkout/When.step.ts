import { When } from "@cucumber/cucumber";
import { pageFixture } from '../../../../src/hooks/browserContextFixture'
import CheckoutPageObjects from "../../pageobjects/checkout/CheckoutPage.actions";

function initializePageObjects(){
    const checkoutPageObjects = new CheckoutPageObjects(pageFixture.page!)
    return {checkoutPageObjects}
}

When("the user clicks Checkout button", async function () {
    const checkoutButton = await initializePageObjects().checkoutPageObjects.checkoutButton()
    await checkoutButton.click()
});
