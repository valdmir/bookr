const { chromium } = require('playwright');

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navigating to the application...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('Navigation successful.');

    console.log('Waiting for the main content container...');
    await page.waitForSelector('div.layout-content-container', { timeout: 10000 });
    console.log('Main content container found.');

    // Use a more specific locator to target the <p> tag
    const headingLocator = page.locator('p:has-text("My Library")');

    console.log('Waiting for the heading "My Library" to be visible...');
    await headingLocator.waitFor({ state: 'visible', timeout: 10000 });
    console.log('Heading is visible.');

    const screenshotPath = '/home/jules/verification/my_library_page.png';
    console.log(`Taking screenshot: ${screenshotPath}`);
    await page.screenshot({ path: screenshotPath });
    console.log('Screenshot taken successfully.');

  } catch (error) {
    console.error('An error occurred during verification:', error);
    if (browser) {
      const page = (await browser.contexts())[0]?.pages()[0];
      if (page) {
        const errorScreenshotPath = '/home/jules/verification/my_library_error.png';
        await page.screenshot({ path: errorScreenshotPath });
        console.log(`Error screenshot saved to ${errorScreenshotPath}`);
      }
    }
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
