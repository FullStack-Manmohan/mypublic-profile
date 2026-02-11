const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto('http://localhost:3004', { waitUntil: 'networkidle' });
  const header = await page.$('header');
  if (!header) { console.error('Header not found'); process.exit(1); }
  const headerBox = await header.boundingBox();
  const logo = await page.$('header img');
  if (!logo) { console.error('Logo img not found'); process.exit(1); }
  const logoBox = await logo.boundingBox();
  console.log('headerBox:', headerBox);
  console.log('logoBox:', logoBox);
  const topSpacing = logoBox.y - headerBox.y;
  const bottomSpacing = headerBox.y + headerBox.height - (logoBox.y + logoBox.height);
  console.log('topSpacing:', topSpacing.toFixed(2));
  console.log('bottomSpacing:', bottomSpacing.toFixed(2));
  console.log('difference (top - bottom):', (topSpacing - bottomSpacing).toFixed(2));
  await browser.close();
})();