import { test, expect } from "@playwright/test";

test.describe("positive login test", () => {
  const baseURL = "https://www.saucedemo.com";
  const users = [
    { username: "standard_user", password: "secret_sauce" },
    { username: "problem_user", password: "secret_sauce" },
    { username: "performance_glitch_user", password: "secret_sauce" },
    { username: "error_user", password: "secret_sauce" },
    { username: "visual_user", password: "secret_sauce" },
  ];

  for (const user of users) {
    test(`Verify Successful Login for All Valid User Credentials - ${user.username}`, async ({ page }) => {
      await page.goto(baseURL);
      await page.fill("#user-name", user.username);
      await page.fill("#password", user.password);
      await page.click("#login-button");
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
      await expect(page.locator(".title")).toHaveText("Products");

    });
  }
});
