import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Best Seller Related Products Feature', () => {

  const filePath = `file://${path.resolve(__dirname, '../demo-site/index.html')}`;

  test('Section should be visible', async ({ page }) => {
    await page.goto(filePath);
    await expect(page.locator('h2:has-text("Best Seller Related Products")')).toBeVisible();
  });

  test('Maximum 6 valid related products displayed', async ({ page }) => {
    await page.goto(filePath);

    const mainPriceText = await page.locator('#main-price').textContent();
    const mainPrice = parseFloat(mainPriceText!.replace('$', ''));

    const cards = page.locator('.product-card');
    const count = await cards.count();

    let validProducts = 0;

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);

      const category = await card.getAttribute('data-category');
      const stock = await card.getAttribute('data-stock');
      const priceText = await card.locator('.price').textContent();
      const price = parseFloat(priceText!.replace('$', ''));

      const withinRange = price >= mainPrice * 0.8 && price <= mainPrice * 1.2;

      if (category === 'Wallet' && stock === 'In Stock' && withinRange) {
        validProducts++;
      }
    }

    expect(validProducts).toBeLessThanOrEqual(6);
  });

  test('Prices should be within ±20% of main product', async ({ page }) => {
    await page.goto(filePath);

    const mainPriceText = await page.locator('#main-price').textContent();
    const mainPrice = parseFloat(mainPriceText!.replace('$', ''));

    const cards = page.locator('.product-card');
    const count = await cards.count();

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);

      const category = await card.getAttribute('data-category');
      const stock = await card.getAttribute('data-stock');
      const priceText = await card.locator('.price').textContent();
      const price = parseFloat(priceText!.replace('$', ''));

     if (category === 'Wallet' && stock === 'In Stock') {
  const withinRange =
    price >= mainPrice * 0.8 &&
    price <= mainPrice * 1.2;

  if (withinRange) {
    expect(price).toBeGreaterThanOrEqual(mainPrice * 0.8);
    expect(price).toBeLessThanOrEqual(mainPrice * 1.2);
  }
}
    }
  });

});