//import {BeforeAll, Before, After, AfterAll} from '@cucumber/cucumber';
const { Before, BeforeAll, AfterAll, After,setDefaultTimeout} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//import { chromium } from "@playwright/test";

setDefaultTimeout(60 * 1000);

BeforeAll(async() =>{
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 10000,
    })
});

AfterAll(async() => {
    await global.browser.close();
})


Before(async() => {
    global.context = await global.browser.newContext();
    page = await global.context.newPage();
})

After (async() =>{
    await global.page.close();
})