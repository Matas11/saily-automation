import { Given } from '@cucumber/cucumber';
import { config } from '../../../../config/config';
import { pageFixture } from '../../../../src/hooks/browserContextFixture';

Given("the user navigates to the Saily website", async () => {
  await pageFixture.context.setExtraHTTPHeaders({
    origin: config.homepage,
  });
  await pageFixture.page.goto(config.homepage);
});