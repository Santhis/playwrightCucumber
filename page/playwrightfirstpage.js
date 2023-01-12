const { test} = require("@playwright/test");
const {basepage} =require("./basepage")

 class playwrightfirstpage extends basepage{

   async navigatetoplaywright() {
    console.log('url inside'+this.urlvalue);
    await page.setDefaultNavigationTimeout(0);
    await page.goto(this.urlvalue);
  } 

  async titlevalue(){
 return page.title().toString();
  }

}

  module.exports = { playwrightfirstpage }