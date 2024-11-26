import {expect, test} from '@playwright/test'

test.describe("test", () => {
  test("2 prodocts add to cart", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    // I asked for assertions on the Cart page - In the Project presentation it's on page 13
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill("Sergey");
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("Viakhirev");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("3288678");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!"
    );
  });
});
