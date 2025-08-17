import { When } from "@cucumber/cucumber";
import { pageFixture } from '../../../../src/hooks/browserContextFixture'
import HomepageViewPageObjects from "../../pageobjects/homepage/HomePage.actions";
import { config } from '../../../../config/config';


function initializePageObjects(){
    const homepageViewPageObjects = new HomepageViewPageObjects(pageFixture.page!)
    return {homepageViewPageObjects}
}

When("the user accepts the cookies", async function () {
    const cookiesAcceptButton = await initializePageObjects().homepageViewPageObjects.cookiesAcceptButton()
    await cookiesAcceptButton.click()
});

When("the user waits until UTM is in the URL", async function () {
  const expectedUTM = `utm_source=${config.utmSource}`;

  await pageFixture.page.waitForFunction(
    (utm) => window.location.href.includes(utm),
    expectedUTM,
    { timeout: 5000 }
  );
});