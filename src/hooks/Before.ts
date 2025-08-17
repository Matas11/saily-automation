import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserType, chromium, firefox, webkit, Page } from 'playwright';
import { pageFixture } from '../../src/hooks/browserContextFixture';
import { browserConfigs } from '../../config/browserConfigs';
import { enableAutoUTMRedirect } from '../../src/utils/utmHelper';

const browsers: { [key: string]: BrowserType } = {
  chromium,
  firefox,
  webkit,
};

let browser: Browser | null = null;
let page: Page | null = null;

setDefaultTimeout(60 * 1000);

Before(async function ({ pickle }) {
  if (!browser) {
    const { browser: browserType, headless } = browserConfigs;

    browser = await browsers[browserType].launch({
      headless,
      args: [
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--disable-web-security',
      ],
    });

    pageFixture.browser = browser;
  }

  try {
    const isMobile = pickle.tags.some((tag: { name: string }) => tag.name === '@Mobile');
    const viewport = isMobile ? browserConfigs.mobile : browserConfigs.desktop;

    const context = await browser.newContext({
      viewport,
      isMobile,
      hasTouch: isMobile,
      extraHTTPHeaders: {
        'sec-ch-ua': `"Google Chrome";v="${browser.version().split('.')[0]}", "Chromium";v="${browser.version().split('.')[0]}", "Not?A_Brand";v="99"`,
        'sec-ch-ua-mobile': isMobile ? '?1' : '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
      userAgent: isMobile
        ? `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1`
        : `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${browser.version()} Safari/537.36`,
    });

    page = await context.newPage();

    enableAutoUTMRedirect(page); // 🔁 čia svarbu

    pageFixture.context = context;
    pageFixture.page = page;

    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error('❌ Error setting up the browser context:', error);
    throw error;
  }
});