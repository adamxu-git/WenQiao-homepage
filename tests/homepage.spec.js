const { test, expect } = require('@playwright/test');

test.describe('Home Page', () => {
  test('should load the home page successfully', async ({ page }) => {
    const response = await page.goto('/');
    
    // Ensure HTTP response is successful
    expect(response).not.toBeNull();
    expect(response.ok()).toBeTruthy();

    // Ensure body element is present in DOM
    await expect(page.locator('body')).toBeAttached();

    await expect(page.locator('modvil-village')).toBeAttached();
    await expect(page.getByRole('heading', {name: '问樵'})).toBeVisible();
    await expect(page.locator('santa-card, modvil-tracker')).toHaveCount(0);
  });

  test('should have valid title or document structure', async ({ page }) => {
    await page.goto('/');
    
    // Validate page has HTML structure
    const body = page.locator('body');
    await expect(body).toBeAttached();
    
    await expect(page).toHaveTitle('问樵 Wenqiao');
  });
});
