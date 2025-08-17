import { When } from "@cucumber/cucumber";
import { pageFixture } from '../../../../src/hooks/browserContextFixture'
import DestinationPageObjects from "../../pageobjects/destination/DestinationPage.actions";
import { destinationsMap } from "../../selectorMaps/destinationsMap";

function initializePageObjects(){
    const destinationPageObjects = new DestinationPageObjects(pageFixture.page!)
    return {destinationPageObjects}
}

When("the user clicks on View Destinations button", async function () {
    const viewDestinationsButton = await initializePageObjects().destinationPageObjects.viewDestinationsButton()
    await viewDestinationsButton.click()
});

When("the user clicks on {string} country", async function (destinationKey: string) {
    const selector = destinationsMap[destinationKey];
    const countryButton = await initializePageObjects().destinationPageObjects.selectCountry(selector)
    await countryButton.click()
});

When("the user clicks on View Destinations button in sidebar menu", async function () {
    const viewDestinationsSideBarMenuButton = await initializePageObjects().destinationPageObjects.viewDestinationsSideBarMenuButton()
    await viewDestinationsSideBarMenuButton.click()
});