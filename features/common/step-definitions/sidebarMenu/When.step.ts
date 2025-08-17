import { When } from "@cucumber/cucumber";
import { pageFixture } from '../../../../src/hooks/browserContextFixture'
import SideBarMenuPageObjects from "../../pageobjects/sidebarMenu/sideMenuPage.actions";

function initializePageObjects(){
    const sideBarMenuPageObjects = new SideBarMenuPageObjects(pageFixture.page!)
    return {sideBarMenuPageObjects}
}

When("the user clicks on SideBar menu button", async function () {
    const sideBarMenuButton = await initializePageObjects().sideBarMenuPageObjects.sideBarMenuButton()
    await sideBarMenuButton.click()
});