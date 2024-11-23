// import { expect, test } from "@playwright/test";

// test.describe.only("test login", () => {
//   test("sergey", async ({ page }) => {
//     await page.goto("https://saucedemo.com");
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill("locked_out_user"); //le nahon
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill("secret_sauce"); // nahon
//     await page.locator('[data-test="login-button"]').click();
//   });

//   test("login tov and password le tov", async ({ page }) => {
//     await page.goto("https://saucedemo.com");
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill("standard_user"); // nahon
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill("123123"); //le nahon
//     await page.locator('[data-test="login-button"]').click();
//   });
//   test("no login type", async ({ page }) => {
//     await page.goto("https://saucedemo.com");
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill(""); // no type
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill("secret_sauce"); //nahon
//     await page.locator('[data-test="login-button"]').click();
//   });
//   test("No type password", async ({ page }) => {
//     await page.goto("https://saucedemo.com");
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill("standard_user"); // nahon
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill(""); // no type
//     await page.locator('[data-test="login-button"]').click();
//   });
//   test("Natanel", async ({ page }) => {
//     await page.goto("https://saucedemo.com");
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill("natanel"); //le nahon
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill("natanel"); //le nahon
//     await page.locator('[data-test="login-button"]').click();
//   });
// });
