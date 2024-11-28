import {expect, test} from '@playwright/test'

test.describe("test", () => {
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
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(2); // this validation need to be before you enter the cart
    // where are all of the validation on this pages i asked for? Page 13 in the presentation
    await page.locator('[data-test="checkout"]').click(); 
  await expect(page.locator('[data-test="firstName"]')).toBeVisible(); // what is this validation
  // where are all of the validation on this pages i asked for? Page 14 in the presentation
    await page.locator('[data-test="firstName"]').fill("Sergey");
    await page.locator('[data-test="lastName"]').fill("Viakhirev");
    await page.locator('[data-test="postalCode"]').fill("3288678");
    await page.locator('[data-test="continue"]').click();
    // where are all of the validation on this pages i asked for? Page 15 in the presentation
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!"
    );
    // where is the validation of the message description i asked for? Page 16 in the presentation
  });
});
