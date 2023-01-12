import { test, expect, type Page } from '@playwright/test';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Given } from '@cucumber/cucumber';
Given('I am in mvc page', async function (page) {
     page = this.page!;
    await page.goto('https://playwright.dev/');
    await page.locator('nav >> a >> text="Playwright"').waitFor();
  });