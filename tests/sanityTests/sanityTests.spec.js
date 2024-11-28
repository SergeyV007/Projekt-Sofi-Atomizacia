import {expect, test} from '@playwright/test'

test.describe.only("test", () => {
  test("Verify Successful Purchase Process and Order Completion", async ({ page }) => {
    await page.goto("https://saucedemo.com");
  await expect(page.locator('[data-test="username"]')).toBeVisible();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  await expect(page.locator('.title')).toHaveText("Products");
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText("2");
   await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(2);
     await expect(page.locator('.cart_item:has-text("Sauce Labs Backpack")')).toBeVisible();
    await expect(page.locator('.cart_item:has-text("Sauce Labs Bike Light")')).toBeVisible();
    await page.locator('[data-test="checkout"]').click(); 
  await expect(page.locator('[data-test="firstName"]')).toBeVisible();
    await expect(page.locator('[data-test="lastName"]')).toBeVisible();
    await expect(page.locator('[data-test="postalCode"]')).toBeVisible();
    await page.locator('[data-test="firstName"]').fill("Sergey");
    await page.locator('[data-test="lastName"]').fill("Viakhirev");
    await page.locator('[data-test="postalCode"]').fill("3288678");
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('.summary_info')).toBeVisible();
    await expect(page.locator('.cart_item')).toHaveCount(2);
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!" );
    await expect(page.locator('.complete-text')).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
  });
});
