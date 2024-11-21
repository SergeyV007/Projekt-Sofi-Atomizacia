// import { test, expect } from "@playwright/test";

// test.describe("Positve Login", () => {
//   const baseURL = "https://www.saucedemo.com";
//   const users = [
//     { username: "standard_user", password: "secret_sauce" },
//     { username: "problem_user", password: "secret_sauce" },
//     { username: "performance_glitch_user", password: "secret_sauce" },
//     { username: "error_user", password: "secret_sauce" },
//     { username: "visual_user", password: "secret_sauce" },
//   ];

//   for (const user of users) {
//     test(`Positive login test - ${user.username}`, async ({ page }) => {
//       await page.goto(baseURL);
//       await page.fill("#user-name", user.username);
//       await page.fill("#password", user.password);
//       await page.click("#login-button");
//       await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//       const pageTitle = await page.locator(".title");
//       await expect(pageTitle).toHaveText("Products");
//     });
//   }
// });
