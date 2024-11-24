import { expect, test } from "@playwright/test";

test.describe("test login", () => {
  test("sergey", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("locked_out_user"); //le nahon
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce"); // nahon
    await page.locator('[data-test="login-button"]').click();
    return false;
  });

  test("login tov and password le tov", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user"); // nahon
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("123123"); //le nahon
    await page.locator('[data-test="login-button"]').click();
    
  });
  test("no login type", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(""); // no type
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce"); //nahon
    await page.locator('[data-test="login-button"]').click();
    
  });
  test("No type password", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user"); // nahon
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(""); // no type
    await page.locator('[data-test="login-button"]').click();
    
  });
  test("Natanel", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("natanel"); //le nahon
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("natanel"); //le nahon
    await page.locator('[data-test="login-button"]').click();
    
  });
});


function validateCredentials(username, password) {
    // Проверяем, если логин или пароль пустые
    if (!username || !password) {
        console.error("Проблема с логином или паролем: поля не должны быть пустыми.");
        return false; // Прерываем выполнение
    }

    // Допустимая длина логина и пароля
    const MIN_LENGTH = 6;
    if (username.length < MIN_LENGTH || password.length < MIN_LENGTH) {
        console.error("Проблема с логином или паролем: длина должна быть не менее 6 символов.");
        return false; // Прерываем выполнение
    }

    // Пример: проверка на совпадение с тестовыми данными
    const VALID_USERNAME = "testUser";
    const VALID_PASSWORD = "testPass";

    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
        console.error("Проблема с логином или паролем: неверные учетные данные.");
        return false; // Прерываем выполнение
    }

    console.log("Логин успешен!");
    return true; // Если все проверки прошли успешно
}

// Пример вызова
const username = "testUser";
const password = "wrongPass";

if (!validateCredentials(username, password)) {
    console.log("Не можем продолжить: проверьте логин или пароль.");
}
