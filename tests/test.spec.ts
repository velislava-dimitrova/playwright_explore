import { test, expect } from '@playwright/test';
import { Label } from 'allure-js-commons';
import { allure } from 'allure-playwright'

test('basic test', async ({ page }) => {
    allure.severity('critical')
    allure.story('Story 1')
    await page.goto('');

    // console.log(page.frames());

    const firstName = page.locator('[src="img/logos/Browsers.png"]');
    await expect(firstName).toBeVisible();
    await expect('dfdf').toBe('f')
});

test('basic test 1', async ({ page }) => {
    allure.severity('normal')
    allure.story('Story 2')
    let label:Label = {name:'label1',value:'labelValue'}
    allure.label(label)
    allure.id('id1')
    await page.goto('');

    // console.log(page.frames());

    const firstName = page.locator('[src="img/logos/Browsers.png"]');
    await expect(firstName).toBeVisible();
});


test('basic test 2', async ({ page }) => {
    allure.severity('high')
    allure.story('Story 3')
    await page.goto('');

    // console.log(page.frames());

    const firstName = page.locator('[src="img/logos/Browsers.png1"]');
    firstName.click();
    
});