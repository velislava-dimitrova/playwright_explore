import { test, expect } from '@playwright/test';
import { Label } from 'allure-js-commons';
import { allure } from 'allure-playwright'
import fs from 'fs';

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
    let label: Label = { name: 'label1', value: 'labelValue' }
    allure.label(label)
    allure.id('id1')
    await page.goto('');

    // console.log(page.frames());

    const firstName = page.locator('[src="img/logos/Browsers.png"]');
    await expect(firstName).toBeVisible();
});


test('basic test 2', async ({ page }) => {
    allure.severity('blocker')
    allure.story('Story 3')
    await page.goto('');

    // console.log(page.frames());

    const firstName = page.locator('[src="img/logos/Browsers.png1"]');
    firstName.click();

});

test('basic test 3', async ({ page }) => {
    allure.severity('minor')
    allure.story('Story 4')
    await page.goto('https://demoqa.com/text-box');

    // console.log(page.frames());

    const firstName = page.locator('#userForm #userName-label');
    firstName.click();
    console.log(await firstName.isVisible())
    console.log(await firstName.textContent())

    await expect(await firstName.textContent()).toBe('Full Name')

    page.locator('#userName').fill('vili')

});

test.skip('basic test 5', async ({ page }) => {
    allure.severity('low')
    allure.story('Story 1')
    await page.goto('');

});
