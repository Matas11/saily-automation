const toBoolean = (value: string | undefined): boolean => {
    return value?.toLowerCase() === 'true';
};

export const browserConfigs = {
    headless: toBoolean(process.env.HEADLESS),
    browser: (process.env.UI_AUTOMATION_BROWSER || 'chromium') as 'chromium' | 'firefox' | 'webkit',
    desktop: { width: 1400, height: 800 },
    mobile: { width: 375, height: 812 },
};