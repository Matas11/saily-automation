import { Page } from 'playwright';
import { config } from '../../config/config';

let utmRedirectHandled = false;

export const enableAutoUTMRedirect = (page: Page) => {
  page.on('framenavigated', async (frame) => {
    if (frame === page.mainFrame() && !utmRedirectHandled) {
      const url = frame.url();

      // Jei tai saily.com puslapis IR neturi jokio utm_source param
      const isSaily = url.includes('saily.com');
      const hasUTM = url.includes('utm_source=');
      const shouldRedirect = isSaily && !hasUTM;

      if (shouldRedirect) {
        const separator = url.includes('?') ? '&' : '?';
        const newUrl = `${url}${separator}utm_source=${config.utmSource}`;
        utmRedirectHandled = true;
        console.log('🔁 Redirecting to:', newUrl);
        await page.goto(newUrl);
      }
    }
  });

  // Po kiekvieno užkrovimo – iš naujo leidžiam redirectint
  page.on('load', () => {
    utmRedirectHandled = false;
  });
};