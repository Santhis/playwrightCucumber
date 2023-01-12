const {playwrightfirstpage} =require("../page/playwrightfirstpage");
const {  Given, Then, When } = require("@cucumber/cucumber");
const { expect} = require("@playwright/test");

//class stepfiles{
//  //page:playwrightfirstpage;
//    contructor(){
//      this.page = new playwrightfirstpage();
//const playwrightFirstPage = new playwrightfirstpage();

Given('User opens Playwright tool url {string}', async function (url) {
  console.log('url'+url);
  const playwrightFirstPageobj = new playwrightfirstpage(url);
  // await page.setDefaultNavigationTimeout(0);
  // page.goto(url);
  //await page.screenshot({path: 'screenshot.png'});
  //await delay(5000);
  //page.pause(6000);
playwrightFirstPageobj.navigatetoplaywright();
//var pagetitlevalue = playwrightFirstPageobj.titlevalue();
//console.log("pagetitlevalue"+pagetitlevalue);
  //playwrightFirstPageobj.navigatetoplaywright(url);
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});

When('website contains menu link {string}', async function (link) {
    await  page.locator('text='+link).click();
    const locator = page.locator('h1');
   await expect(locator).toHaveText(/Installation/);
  });

  Then('website link {string} can be opened', async function (api) {
    await page.locator('text='+api).first().click();
    const lnkAPI = page.locator('h1')
    await expect(lnkAPI).toHaveText(/Playwright Library/);
  });
 // }
 // }