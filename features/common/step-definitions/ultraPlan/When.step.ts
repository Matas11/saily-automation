import { When } from "@cucumber/cucumber";
import { pageFixture } from '../../../../src/hooks/browserContextFixture'
import UltraPlanPageObjects from "../../pageobjects/ultraPlan/UltraPlanPage.actions";

function initializePageObjects(){
    const ultraPlanPageObjects = new UltraPlanPageObjects(pageFixture.page!)
    return {ultraPlanPageObjects}
}

When("the user clicks on Ultra Plan button", async function () {
    const ultraPlanButton = await initializePageObjects().ultraPlanPageObjects.ultraPlanButton()
    await ultraPlanButton.click()
});

When("the user clicks on Get The Ultra Plan button", async function () {
    const getUltraPlanButton = await initializePageObjects().ultraPlanPageObjects.getUltraPlanButton()
    await getUltraPlanButton.click()
});

When("the user clicks on Ultra Plan button in sidebar", async function () {
    const ultraPlanSideBarButton = await initializePageObjects().ultraPlanPageObjects.ultraPlanSideBarButton()
    await ultraPlanSideBarButton.click()
});