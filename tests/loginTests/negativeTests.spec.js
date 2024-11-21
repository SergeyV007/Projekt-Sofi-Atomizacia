import {expect , test} from '@playwright/test'

test.describe.only('test login', ()=> {
    test('sergey', async ({page})=> {
        await page.goto('https://saucedemo.com');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret');
        await page.locator('[data-test="login-button"]').click();




    })
 })