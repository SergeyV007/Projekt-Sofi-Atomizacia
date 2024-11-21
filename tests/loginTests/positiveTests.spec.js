import {expect , test} from '@playwright/test'

test.describe.only('test login', ()=> {
    test('sergey', async ({page})=> {
        await page.goto('https://saucedemo.com');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // add to cart 
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();

        
    })
})