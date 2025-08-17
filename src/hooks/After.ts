import { After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { pageFixture } from '../hooks/browserContextFixture';

const captureScreenshot = async (scenarioName: string) => {
    console.log(`Scenario "${scenarioName}" failed. Capturing screenshot...`);
    const screenshotDir = path.resolve(process.cwd(), 'screenshots');
    const screenshotPath = path.join(
        screenshotDir,
        `${scenarioName.replace(/[\s:/\\]/g, '_')}.png`
    );
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
        console.log(`Created screenshot directory: ${screenshotDir}`);
    }

    if (pageFixture.page) {
        await pageFixture.page.screenshot({ path: screenshotPath });
        console.log(`Screenshot saved at: ${screenshotPath}`);
    }
};

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        await captureScreenshot(scenario.pickle.name);
    }
    if (pageFixture.page) {
        await pageFixture.page.waitForTimeout(1500);
        await pageFixture.page.close();
    }
    if (pageFixture.context) {
        await pageFixture.context.close();
    }
});