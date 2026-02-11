const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto('http://localhost:3004', { waitUntil: 'networkidle' });
  const header = await page.$('header');
  if (!header) {
    console.error('Header not found');
    await browser.close();
    process.exit(1);
  }
  const box = await header.boundingBox();
  if (!box) {
    console.error('Could not get bounding box for header');
    await browser.close();
    process.exit(1);
  }
  // screenshot the header only
  await page.screenshot({ path: 'header.png', clip: { x: Math.max(0, box.x), y: Math.max(0, box.y), width: Math.min(box.width, 1600), height: Math.min(box.height, 900) } });
  console.log('Saved header.png');
  await browser.close();
})();